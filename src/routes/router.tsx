import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '../layouts/auth/auth-layout';
import AuthForm from '../layouts/auth/auth-form/auth-form';
import { ROUTES } from '../constants/routes';
import RootLayout from '../layouts/root/root-layout';

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
