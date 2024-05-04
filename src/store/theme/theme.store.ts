import { create } from 'zustand';
import { TThemeMode, TThemeStore } from '@/types';
import { createSelectors, getLocalStorage } from '@/utils';
import { THEME, THEME_MODE } from '@/constants';

const useTheme = create<TThemeStore>()((set) => ({
  theme: getLocalStorage(THEME) || TThemeMode.LIGHT,
  setTheme: (theme: TThemeMode) => set(() => ({ theme })),

  themeMode: getLocalStorage(THEME_MODE) || TThemeMode.LIGHT,
  setThemeMode: (mode: TThemeMode) => set(() => ({ themeMode: mode })),
}));

export const useThemeStore = createSelectors(useTheme);
