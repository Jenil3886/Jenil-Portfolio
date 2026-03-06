'use client';

import { useState } from 'react';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { ABOUT_SECTIONS, PERSONAL_INFO } from '@/data/personal-info';
import { SKILLS } from '@/data/skills';
import { EXP_SECTIONS } from '@/data/experiences';
import { PROJECTS } from '@/data/projects';
import { CONSTANTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

type Line = {
  type: 'input' | 'output' | 'hint';
  text: string;
};

const defaultLines: Line[] = [
  { type: 'hint', text: 'Portfolio terminal ready.' },
  { type: 'hint', text: "Try: help, about, skills, work, projects, contact, clear" },
];

export function PortfolioTerminal() {
  const { ref } = useSectionInView('Terminal', 0.4);
  const [command, setCommand] = useState('');
  const [lines, setLines] = useState<Line[]>(defaultLines);

  const runCommand = (value: string) => {
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;

    const next: Line[] = [{ type: 'input', text: `$ ${value}` }];

    if (cmd === 'help') {
      next.push({
        type: 'output',
        text: 'Available commands: whoami, about, skills, work, experience, projects, contact, clear',
      });
    } else if (cmd === 'whoami') {
      next.push({
        type: 'output',
        text: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.designation}`,
      });
    } else if (cmd === 'about') {
      next.push({
        type: 'output',
        text: ABOUT_SECTIONS.join('\n\n'),
      });
    } else if (cmd === 'skills') {
      const frontend = (SKILLS[CONSTANTS.FRONTEND] || []).map((s) => s.title).join(', ');
      const backend = (SKILLS[CONSTANTS.BACKEND] || []).map((s) => s.title).join(', ');
      const tools = (SKILLS[CONSTANTS.TOOLS] || []).map((s) => s.title).join(', ');
      next.push({
        type: 'output',
        text: `Frontend: ${frontend}\nBackend: ${backend}\nTools: ${tools}`,
      });
    } else if (cmd === 'work' || cmd === 'experience') {
      const expText = EXP_SECTIONS.flatMap((company) =>
        company.roles.map((role) => {
          const end = role.endDate === CONSTANTS.CURRENT ? 'Present' : role.endDate.slice(0, 10);
          return `${role.title} @ ${company.company.name} (${role.startDate.slice(0, 10)} -> ${end})`;
        })
      ).join('\n');
      next.push({
        type: 'output',
        text: expText || 'No experience found.',
      });
    } else if (cmd === 'projects') {
      const projectsText = PROJECTS.map((project) => `${project.title} - ${project.subTitle}`).join('\n');
      next.push({
        type: 'output',
        text: projectsText || 'No projects found.',
      });
    } else if (cmd === 'contact') {
      next.push({
        type: 'output',
        text: `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}`,
      });
    } else if (cmd === 'clear') {
      setLines(defaultLines);
      setCommand('');
      return;
    } else {
      next.push({ type: 'output', text: `Unknown command: ${value}\nType 'help'` });
    }

    setLines((prev) => [...prev, ...next].slice(-24));
    setCommand('');
  };

  return (
    <section ref={ref} id="terminal" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/40 bg-black text-green-300 overflow-hidden shadow-xl shadow-black/60">
          <div className="px-4 py-3 border-b border-primary/30 bg-[#080808] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            </div>
            <p className="font-code text-xs text-primary">jenil@portfolio:~/data</p>
          </div>

          <div className="p-5 md:p-6 bg-black">
            <p className="font-code text-primary text-sm">$ fetch --portfolio-data</p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary">Interactive Terminal</h2>
            <p className="mt-2 text-muted-foreground">Type commands to explore profile data.</p>

            <div className="mt-6 rounded-md border border-primary/35 bg-[#050505] p-4 h-[360px] overflow-y-auto">
              {lines.map((line, index) => (
                <pre
                  key={`${line.type}-${index}`}
                  className={`whitespace-pre-wrap break-words font-code text-xs md:text-sm mb-2 ${
                    line.type === 'input' ? 'text-cyan-400' : line.type === 'hint' ? 'text-muted-foreground' : 'text-green-300'
                  }`}
                >
                  {line.text}
                </pre>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(command);
              }}
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 rounded-md border border-primary/45 bg-[#050505] px-3 py-2 flex items-center gap-2">
                <span className="text-cyan-400 font-code">$</span>
                <input
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="command..."
                  className="w-full bg-transparent border-none outline-none text-sm font-code text-green-200 placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit">Run</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
