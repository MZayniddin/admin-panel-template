import { TThemeMode } from '@/types/theme.types';

export const colors = (mode: TThemeMode) => ({
  ...(mode === TThemeMode.DARK
    ? {
        body: 'hsl(233, 60%, 6%)',
        primaryBg: 'hsl(218, 46%, 10%)',
        secondaryBg: 'hsl(224, 35%, 15%)',
      }
    : {
        body: 'hsl(0, 0%, 98%)',
        primaryBg: 'rgb(255, 255, 255)',
        secondaryBg: 'hsl(0, 0%, 92%)',
      }),
  primary: 'hsl(229, 83%, 60%)',
  gray: {
    300: 'hsl(220, 9%, 46%)',
    500: 'hsl(229, 16%, 60%)',
  },
});
