import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider } from '@/providers';
import { router } from '@/router';

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />;
    </AppThemeProvider>
  );
}

export default App;
