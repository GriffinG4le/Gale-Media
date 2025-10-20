import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    function apply(t: Theme) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = t === 'dark' || (t === 'system' && prefersDark);
      root.classList.toggle('dark', isDark);
    }
    apply(theme);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => theme === 'system' && apply('system');
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, [theme]);

  function setThemePreference(next: Theme) {
    setTheme(next);
    if (next === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', next);
  }

  return { theme, setTheme: setThemePreference };
}
