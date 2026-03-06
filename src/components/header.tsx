'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/nav-items';
import { motion } from 'framer-motion';

export const navLinks = NAV_ITEMS.map(item => ({
  name: item.label,
  hash: item.path,
}));

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center">
          <motion.div whileHover={{ y: -1.5 }} whileTap={{ scale: 0.99 }} className="font-code text-sm md:text-base text-primary tracking-wide">
            <span className="text-accent">$</span> jenil@portfolio
            <span className="text-muted-foreground">:~</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <motion.div key={link.hash} whileHover={{ y: -2 }}>
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={cn(
                  'transition-colors hover:text-primary relative tracking-wide',
                  activeSection === link.name ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                  />
                )}
              </Link>
            </motion.div>
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
