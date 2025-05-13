import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeModeProvider} from "./providers/ThemeModeContext.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./providers/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </ThemeModeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
