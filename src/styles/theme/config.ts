import { ThemeConfig } from 'antd/es/config-provider/context';
import { TThemeMode } from '@/types';
import { colors } from './colors';

const controlHeight = 40;

export const components = (mode: TThemeMode): ThemeConfig['components'] => {
  const color = colors(mode);

  return {
    Button: {
      controlHeight,
    },

    Card: {
      colorBgContainer: color.primaryBg,
      boxShadowTertiary:
        '0px -4px 60px 0px rgba(0, 0, 0, 0.02), -1px 6px 16px 0px rgba(0, 0, 0, 0.06)',
    },

    Input: {
      controlHeight,
      colorBgContainer: color.primaryBg,
    },

    Select: {
      controlHeight,
      colorBgContainer: color.primaryBg,
    },

    Menu: {
      iconSize: 18,
      itemHoverColor: color.primary,
    },

    Layout: {
      headerBg: color.primaryBg,
      colorBgLayout: color.body,
    },
  };
};
