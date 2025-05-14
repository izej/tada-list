import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';

import MainLayout from './layouts/Main.tsx';
import AuthLayout from './layouts/Auth.tsx';
import Register from './pages/Register/Register.tsx';
import Login from './pages/Login/Login.tsx';
import Home from './pages/Home/Home.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import { useAuth } from './providers/AuthContext.tsx';
import Spinner from './components/Spinner/Spinner.tsx';

function getRoutes(): RouteObject[] {
  return [
    {
      element: <PrivateRoute />,
      children: [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            // { path: 'dashboard', element: <Dashboard /> },
          ],
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];
}

function AppWithRouter() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  const router = createBrowserRouter(getRoutes());
  return <RouterProvider router={router} />;
}

function App() {
  return <AppWithRouter />;
}

export default App;
