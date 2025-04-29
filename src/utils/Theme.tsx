// theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: { main: '#3f51b5' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
          text: { primary: '#1a1a1a' },
        }
        : {
          primary: { main: '#90caf9' },
          background: { default: '#121212', paper: '#1e1e1e' },
          text: { primary: '#ffffff' },
        }),
    },
  });
