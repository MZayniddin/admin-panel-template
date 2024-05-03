import { ThemeConfig } from 'antd/es/config-provider/context';

const controlHeight = 40;

export const components = (): ThemeConfig['components'] => {
  return {
    Button: {
      controlHeight,
    },
  };
};
