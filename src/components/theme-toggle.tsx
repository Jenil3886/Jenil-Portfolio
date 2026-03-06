'use client';

import * as React from 'react';
import { TerminalSquare } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [history, setHistory] = React.useState<string[]>([
    'theme-cli v1.0 initialized',
    "type 'light' for light mode",
    "type anything else for dark mode",
  ]);

  const runCommand = (value: string) => {
    const command = value.trim().toLowerCase();
    const nextHistory = [...history, `$ ${value || ' '}`];

    if (command === 'light') {
      setTheme('light');
      nextHistory.push('> switched to LIGHT mode');
    } else {
      setTheme('dark');
      nextHistory.push('> switched to DARK mode');
    }

    setHistory(nextHistory.slice(-9));
    setInput('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title="Terminal Theme Console"
          className="border border-primary/35 bg-secondary/50 text-primary hover:bg-primary/15"
        >
          <TerminalSquare className="h-[1.05rem] w-[1.05rem]" />
          <span className="sr-only">Open Theme Terminal</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden border-primary/40 bg-card max-w-xl">
        <div className="terminal-titlebar">
          <div className="flex items-center gap-2">
            <span className="terminal-dot-red" />
            <span className="terminal-dot-yellow" />
            <span className="terminal-dot-green" />
          </div>
          <p className="text-xs font-code text-primary/80">theme@portfolio:~</p>
        </div>
        <div className="terminal-content">
          <p className="terminal-prompt">theme --status</p>
          <p className="terminal-output mb-4">Current: {(theme || 'dark').toUpperCase()}</p>

          <div className="mb-4 space-y-1 text-xs md:text-sm font-code">
            {history.map((line, idx) => (
              <p key={`${line}-${idx}`} className={line.startsWith('>') ? 'text-primary/90' : 'text-muted-foreground'}>
                {line}
              </p>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              runCommand(input);
            }}
            className="flex items-center gap-2 border border-primary/35 bg-black/50 rounded-md px-3 py-2"
          >
            <span className="text-accent font-code text-sm">$</span>
            <input
              autoFocus
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="type: light"
              className="w-full bg-transparent border-none outline-none font-code text-sm text-foreground placeholder:text-muted-foreground"
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
