import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeModeProvider} from "./providers/ThemeModeContext.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeModeProvider>
        <App/>
      </ThemeModeProvider>
    </Provider>
  </StrictMode>,
)
