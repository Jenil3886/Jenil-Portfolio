'use client';

import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import { useSectionInView } from '@/hooks/use-section-in-view';

import { NAV_ITEMS } from '@/data/nav-items';

export const navLinks = NAV_ITEMS.map(item => ({
  name: item.label,
  hash: item.path,
})) as const;

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold">Jenil Gajera</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={cn(
                'transition-colors hover:text-primary',
                activeSection === link.name ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.hash}>
                    <Link
                      href={link.hash}
                       onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                      className={cn(
                        'flex items-center gap-4 px-2.5 hover:text-primary',
                        activeSection === link.name ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
