'use client';

import { useMemo, useState } from 'react';
import { ABOUT_SECTIONS, PERSONAL_INFO } from '@/data/personal-info';
import { SKILLS } from '@/data/skills';
import { EXP_SECTIONS } from '@/data/experiences';
import { PROJECTS } from '@/data/projects';
import { CONSTANTS } from '@/lib/constants';
import { TerminalSection } from '@/components/terminal-section';
import { Button } from '@/components/ui/button';

type HistoryItem = {
  kind: 'input' | 'output' | 'hint';
  text: string;
};

const baseHints = [
  "Type 'help' for available commands.",
  "Try: about, skills, work, projects, contact, clear",
];

export function PortfolioTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { kind: 'hint', text: 'Interactive Portfolio Terminal ready.' },
    { kind: 'hint', text: baseHints[0] },
    { kind: 'hint', text: baseHints[1] },
  ]);

  const skillsText = useMemo(() => {
    const frontend = (SKILLS[CONSTANTS.FRONTEND] || []).map((item) => item?.title).filter(Boolean).join(', ');
    const backend = (SKILLS[CONSTANTS.BACKEND] || []).map((item) => item?.title).filter(Boolean).join(', ');
    const tools = (SKILLS[CONSTANTS.TOOLS] || []).map((item) => item?.title).filter(Boolean).join(', ');
    return [
      `Frontend: ${frontend}`,
      `Backend: ${backend}`,
      `Tools: ${tools}`,
    ].join('\n');
  }, []);

  const experienceText = useMemo(() => {
    return EXP_SECTIONS.flatMap((company) =>
      company.roles.map((role) => {
        const endDate = role.endDate === CONSTANTS.CURRENT ? 'Present' : role.endDate.slice(0, 10);
        return `${role.title} @ ${company.company.name} (${role.startDate.slice(0, 10)} -> ${endDate})`;
      })
    ).join('\n');
  }, []);

  const projectsText = useMemo(() => {
    return PROJECTS.map((project) => `- ${project.title}: ${project.subTitle}`).join('\n');
  }, []);

  const onRun = (rawValue: string) => {
    const value = rawValue.trim();
    const cmd = value.toLowerCase();

    if (!value) return;

    const next: HistoryItem[] = [{ kind: 'input', text: `$ ${value}` }];

    if (cmd === 'help') {
      next.push({
        kind: 'output',
        text: 'Commands: whoami, about, skills, work, experience, projects, contact, clear',
      });
    } else if (cmd === 'whoami') {
      next.push({
        kind: 'output',
        text: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.designation}`,
      });
    } else if (cmd === 'about') {
      next.push({
        kind: 'output',
        text: ABOUT_SECTIONS.join('\n\n'),
      });
    } else if (cmd === 'skills') {
      next.push({
        kind: 'output',
        text: skillsText,
      });
    } else if (cmd === 'work' || cmd === 'experience') {
      next.push({
        kind: 'output',
        text: experienceText || 'No experience found.',
      });
    } else if (cmd === 'projects') {
      next.push({
        kind: 'output',
        text: projectsText || 'No projects found.',
      });
    } else if (cmd === 'contact') {
      next.push({
        kind: 'output',
        text: `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}`,
      });
    } else if (cmd === 'clear') {
      setHistory([
        { kind: 'hint', text: 'Terminal cleared.' },
        { kind: 'hint', text: baseHints[0] },
        { kind: 'hint', text: baseHints[1] },
      ]);
      setInput('');
      return;
    } else {
      next.push({
        kind: 'output',
        text: `Command not found: ${value}\nTry 'help'.`,
      });
    }

    setHistory((prev) => [...prev, ...next].slice(-22));
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalSection title="Portfolio Terminal" path="~/portfolio/console" command="portfolio --interactive">
          <div className="space-y-4">
            <div className="rounded-md border border-primary/35 bg-black/60 p-4 h-[360px] overflow-y-auto">
              {history.map((line, index) => (
                <pre
                  key={`${line.kind}-${index}`}
                  className={`whitespace-pre-wrap break-words font-code text-xs md:text-sm mb-2 ${
                    line.kind === 'input' ? 'text-accent' : line.kind === 'hint' ? 'text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {line.text}
                </pre>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                onRun(input);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 flex items-center gap-2 rounded-md border border-primary/45 bg-black/65 px-3 py-2">
                <span className="font-code text-accent">$</span>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="type command: about"
                  className="w-full bg-transparent border-none outline-none text-sm font-code text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit">Run</Button>
            </form>
          </div>
        </TerminalSection>
      </div>
    </section>
  );
}
