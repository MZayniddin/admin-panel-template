import { create } from 'zustand';
import { TThemeMode, TThemeStore } from '@/types';
import { createSelectors, getLocalStorage, setLocalStorage } from '@/utils';
import { THEME, THEME_MODE } from '@/constants';

const useTheme = create<TThemeStore>()((set) => ({
  theme: getLocalStorage(THEME) || TThemeMode.LIGHT,
  setTheme: (theme: TThemeMode) =>
    set(() => {
      setLocalStorage(THEME, theme);
      return { theme };
    }),

  themeMode: getLocalStorage(THEME_MODE) || TThemeMode.LIGHT,
  setThemeMode: (themeMode: TThemeMode) =>
    set(() => {
      setLocalStorage(THEME_MODE, themeMode);

      return { themeMode };
    }),
}));

export const useThemeStore = createSelectors(useTheme);
