import { ThemeConfig } from 'antd/es/config-provider/context';

const controlHeight = 40;

export const components = (): ThemeConfig['components'] => {
  return {
    Button: {
      controlHeight,
    },

    Card: {
      boxShadowTertiary:
        '0px -4px 60px 0px rgba(0, 0, 0, 0.02), -1px 6px 16px 0px rgba(0, 0, 0, 0.06)',
    },
  };
};
