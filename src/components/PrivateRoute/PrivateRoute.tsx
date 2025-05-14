import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'providers/AuthContext';
import Spinner from 'components/Spinner/Spinner';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
