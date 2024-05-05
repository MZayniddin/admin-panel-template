import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@/layouts';
import { Analytics, Auth, Finance, Home, Sales } from '@/pages';
import { ROUTES } from '@/constants';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.auth,
        element: <Auth />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.sales, element: <Sales /> },
      { path: ROUTES.analytics, element: <Analytics /> },
      { path: ROUTES.finance, element: <Finance /> },
    ],
  },
]);
