import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/Main.tsx";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from './utils/Theme';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<> Home </>} />
  </Route>
));

function App() {
  return (
    <CssVarsProvider theme={theme}
                     defaultMode="dark"
                     storageKey="tada-list-theme-mode"
                     colorSchemeSelector="class" >
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;