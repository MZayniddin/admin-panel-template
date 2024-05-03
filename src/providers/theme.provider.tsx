import { PropsWithChildren } from 'react';
import { GlobalStyles } from '@/styles';
import { ConfigProvider } from 'antd';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />

      <ConfigProvider csp={{ nonce: 'uct-dashboard' }}>{children}</ConfigProvider>
    </>
  );
};
