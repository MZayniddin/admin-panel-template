import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider } from '@/providers';
import { router } from '@/router';
import { useLang } from '@/hooks';

export const App = () => {
  useLang();

  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
};
