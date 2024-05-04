export enum TThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export type TThemeStore = {
  theme: TThemeMode;
  setTheme: (theme: TThemeMode) => void;

  themeMode: TThemeMode;
  setThemeMode: (mode: TThemeMode) => void;
};
