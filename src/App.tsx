import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from "./layouts/Main.tsx";
import AuthLayout from "./layouts/Auth.tsx";
import Register from "./pages/Register/Register.tsx";
import Login from './pages/Login/Login.tsx';
import NotFound from "./pages/NotFound/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        {/*<Route index element={<Home />} />*/}
        {/*<Route path="dashboard" element={<Dashboard />} />*/}
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
