import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles';
import { useTheme } from '@/hooks';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { algorithm, components, token, styled } = useTheme();

  return (
    <ThemeProvider theme={styled}>
      <GlobalStyles theme={{ token, components, algorithm }} />

      <ConfigProvider csp={{ nonce: 'uct-dashboard' }}>{children}</ConfigProvider>
    </ThemeProvider>
  );
};
