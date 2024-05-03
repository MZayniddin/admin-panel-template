import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, RootLayout } from '@/layouts';
import { AuthForm } from '@/pages';
import { ROUTES } from '@/constants/routes';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.auth,
        element: <AuthForm />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [{}],
  },
]);
