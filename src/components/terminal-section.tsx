'use client';

import { TerminalSquare } from 'lucide-react';
import { ReactNode } from 'react';

interface TerminalSectionProps {
  title: string;
  path: string;
  command: string;
  children: ReactNode;
  className?: string;
}

export function TerminalSection({ title, path, command, children, className }: TerminalSectionProps) {
  return (
    <div className={`terminal-shell ${className ?? ''}`}>
      <div className="terminal-titlebar">
        <div className="flex items-center gap-2">
          <span className="terminal-dot-red" />
          <span className="terminal-dot-yellow" />
          <span className="terminal-dot-green" />
        </div>
        <div className="flex items-center gap-2 text-xs text-primary/90 font-code">
          <TerminalSquare className="h-3.5 w-3.5" />
          {path}
        </div>
      </div>
      <div className="terminal-content">
        <p className="terminal-prompt">{command}</p>
        <h2 className="mt-3 text-2xl md:text-4xl font-bold section-title">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
