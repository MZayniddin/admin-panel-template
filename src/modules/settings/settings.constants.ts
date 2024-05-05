import { getThemeIcon } from '@/helpers';
import { TThemeMode } from '@/types';
import { TFunction } from 'i18next';

export const themeModes = (t: TFunction) => [
  {
    name: t('theme.light'),
    icon: getThemeIcon(TThemeMode.LIGHT),
    value: TThemeMode.LIGHT,
  },
  {
    name: t('theme.dark'),
    icon: getThemeIcon(TThemeMode.DARK),
    value: TThemeMode.DARK,
  },
  {
    name: t('theme.system'),
    icon: getThemeIcon(TThemeMode.SYSTEM),
    value: TThemeMode.SYSTEM,
  },
];
