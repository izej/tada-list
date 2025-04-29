import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeModeProvider} from "./providers/ThemeModeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
    <App />
    </ThemeModeProvider>
  </StrictMode>,
)
