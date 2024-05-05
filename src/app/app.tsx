import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider, MessageProvider } from '@/providers';
import { router } from '@/router';
import { useLang } from '@/hooks';

export const App = () => {
  useLang();

  return (
    <AppThemeProvider>
      <MessageProvider>
        <RouterProvider router={router} />
      </MessageProvider>
    </AppThemeProvider>
  );
};
