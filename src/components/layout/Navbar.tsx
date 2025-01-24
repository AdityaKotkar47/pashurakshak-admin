'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@heroui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border dark:border-border-dark bg-card/95 backdrop-blur-lg dark:bg-card-dark/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="brand-link">
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                Pashu Rakshak
              </span>
            </Link>
            <span className="text-sm text-muted-foreground">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-primary-500 dark:hover:text-primary-400"
            >
              {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 