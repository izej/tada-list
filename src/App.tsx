import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';

import MainLayout from 'layouts/Main';
import AuthLayout from 'layouts/Auth';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useAuth } from 'providers/AuthContext';
import Spinner from 'components/Spinner/Spinner';
import Calendar from "pages/Calendar/Calendar.tsx";
import Profile from "pages/Profile/Profile.tsx";

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
        {
          path: '/calendar',
          element: <MainLayout />,
          children: [
            { index: true, element: <Calendar /> },
          ],
        },
        {
          path: '/profile',
          element: <MainLayout />,
          children: [
            { index: true, element: <Profile /> },
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
