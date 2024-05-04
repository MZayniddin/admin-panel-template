import { useThemeStore } from '@/store';
import { useState, useEffect } from 'react';
import { themes } from '@/styles';
import { TThemeMode } from '@/types';

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    (): boolean => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const { theme, themeMode, setTheme } = useThemeStore();

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent): void => {
      setIsDarkTheme(e.matches);
    };

    if (themeMode === TThemeMode.SYSTEM) {
      setTheme(isDarkTheme ? TThemeMode.DARK : TThemeMode.LIGHT);
    } else {
      setTheme(themeMode);
    }

    const darkThemeMq: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, [setTheme, isDarkTheme, themeMode]);

  return { ...themes(theme) };
};
