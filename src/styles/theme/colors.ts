import { TThemeMode } from '@/types/theme.types';

export const colors = (mode: TThemeMode) => ({
  ...(mode === TThemeMode.DARK
    ? {
        body: 'hsl(233, 60%, 6%)',
        primaryBg: 'hsl(218, 46%, 10%)',
        secondaryBg: 'hsl(218, 46%, 10%)',
        icon: 'hsla(0, 0%, 100%, 0.5)',
        text: 'hsl(219.38deg 28.57% 43.92%)',
        contrast: 'hsl(0deg 0% 100%)',
      }
    : {
        body: 'hsl(0, 0%, 98%)',
        primaryBg: 'rgb(255, 255, 255)',
        secondaryBg: 'hsl(0, 0%, 92%)',
        icon: 'hsla(218, 46%, 10%, 0.5)',
        text: 'hsl(217.5deg 46.15% 10.2%)',
        contrast: 'hsl(0deg 0% 0%)',
      }),
  primary: 'hsl(229, 83%, 60%)',
  gray: {
    100: 'hsl(220, 9%, 76%)',
    300: 'hsl(220, 9%, 46%)',
    500: 'hsl(229, 16%, 60%)',
  },
});
