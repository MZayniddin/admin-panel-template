import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider } from '@/providers';
import { router } from '@/router';

export const App = () => {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
};
