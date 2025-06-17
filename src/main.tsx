import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeModeProvider} from "./providers/ThemeModeContext.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./providers/AuthContext.tsx";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <AuthProvider>
          <App/>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            theme="light"
          />
        </AuthProvider>
      </ThemeModeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
