import { TThemeMode } from '@/types/theme.types';

export const colors = (mode: TThemeMode) => ({
  ...(mode === TThemeMode.DARK
    ? {
        body: 'hsl(233, 60%, 6%)',
      }
    : {
        body: 'hsl(0, 0%, 98%)',
      }),
  primary: 'hsl(229, 83%, 60%)',
});
