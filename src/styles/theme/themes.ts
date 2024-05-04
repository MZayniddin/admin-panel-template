import { theme } from 'antd';
import { components } from './config';
import { colors } from './colors';
import { TThemeMode } from '@/types';

export const themes = (mode: TThemeMode) => ({
  styled: colors(mode),
  token: {
    colorPrimary: colors(mode).primary,
    borderRadius: 8,
  },
  components: components(mode),
  algorithm: mode === TThemeMode.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
});
