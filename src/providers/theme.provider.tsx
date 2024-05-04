import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles';
import { useTheme } from '@/hooks';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { algorithm, components, token, styled } = useTheme();

  return (
    <ThemeProvider theme={styled}>
      <GlobalStyles />

      <ConfigProvider theme={{ token, components, algorithm }} csp={{ nonce: 'uct-dashboard' }}>
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
};
