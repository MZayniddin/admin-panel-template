import { Button } from '@/components';
import { useThemeStore } from '@/store';
import { TThemeMode } from '@/types';
import { getThemeIcon } from './theme-switcher.helpers';

export const ThemeSwitcher = () => {
  const { themeMode, setThemeMode, setTheme } = useThemeStore();

  const toggleThemeMode = () => {
    const nextThemeMode =
      themeMode === TThemeMode.SYSTEM
        ? TThemeMode.LIGHT
        : themeMode === TThemeMode.LIGHT
        ? TThemeMode.DARK
        : TThemeMode.SYSTEM;

    setThemeMode(nextThemeMode);
    setTheme(nextThemeMode);
  };

  const ThemeIcon = getThemeIcon(themeMode);

  return (
    <Button shape="circle" onClick={toggleThemeMode}>
      {ThemeIcon}
    </Button>
  );
};
