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
      colorBgContainer: color.primaryBg,
    },

    Layout: {
      headerBg: color.secondaryBg,
      headerHeight: 55,
      headerPadding: '10px 20px',
      siderBg: color.secondaryBg,
    },
  };
};
