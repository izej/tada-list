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
import {AuthProvider, useAuth} from "./providers/AuthContext.tsx";

function getRoutes(isAuthenticated: boolean): RouteObject[] {
  return [
    {
      element: <PrivateRoute isAuthenticated={isAuthenticated} />,
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
  const { user } = useAuth();
  const router = createBrowserRouter(getRoutes(!!user));

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <AuthProvider>
      <AppWithRouter />
    </AuthProvider>
  );
}

export default App;
