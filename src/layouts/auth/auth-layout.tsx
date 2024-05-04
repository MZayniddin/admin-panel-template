import { Navigate, Outlet } from 'react-router-dom';
import { AuthWrapper } from './styles';

export const AuthLayout = () => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};
