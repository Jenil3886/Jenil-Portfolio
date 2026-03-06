'use client';

import * as React from 'react';
import { TerminalSquare } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [input, setInput] = React.useState('');
  const [history, setHistory] = React.useState<string[]>([
    'theme-terminal online',
    "type 'light' to switch light mode",
    'any other command => dark mode',
  ]);

  const runThemeCommand = (value: string) => {
    const cmd = value.trim().toLowerCase();
    const nextHistory = [...history, `$ ${value || ' '}`];

    if (cmd === 'light') {
      setTheme('light');
      nextHistory.push('> switched to LIGHT');
    } else {
      setTheme('dark');
      nextHistory.push('> switched to DARK');
    }

    setHistory(nextHistory.slice(-9));
    setInput('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="border border-primary/35 bg-black/50 text-primary hover:bg-primary/10">
          <TerminalSquare className="h-[1.1rem] w-[1.1rem]" />
          <span className="sr-only">Open Theme Terminal</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden border-primary/35 bg-black max-w-xl text-green-300">
        <div className="px-4 py-3 border-b border-primary/35 bg-[#080808] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <p className="font-code text-xs text-primary">theme@portfolio:~</p>
        </div>

        <div className="p-5 bg-black">
          <p className="font-code text-sm text-primary">$ theme --status</p>
          <p className="mt-1 text-sm text-muted-foreground">Current: {(theme || 'dark').toUpperCase()}</p>

          <div className="mt-4 rounded-md border border-primary/35 bg-[#050505] p-3 space-y-1">
            {history.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className={`font-code text-xs md:text-sm ${line.startsWith('>') ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {line}
              </p>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              runThemeCommand(input);
            }}
            className="mt-4 flex items-center gap-2 rounded-md border border-primary/40 bg-[#050505] px-3 py-2"
          >
            <span className="font-code text-cyan-400">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="light"
              className="w-full bg-transparent border-none outline-none text-sm font-code text-green-200 placeholder:text-muted-foreground"
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
