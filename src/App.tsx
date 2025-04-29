import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/Main.tsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<> Home </>} />
  </Route>
));

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;