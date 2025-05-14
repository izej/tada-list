import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../providers/AuthContext.tsx';
import Spinner from '../Spinner/Spinner.tsx';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
