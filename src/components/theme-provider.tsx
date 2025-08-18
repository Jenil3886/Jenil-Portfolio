'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { ActiveSectionContextProvider } from '@/hooks/use-active-section';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </NextThemesProvider>
  );
}
