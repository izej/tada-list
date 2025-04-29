import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#3f51b5' },
        background: { default: '#f5f5f5' },
        text: { primary: '#1a1a1a' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        background: { default: '#121212' },
        text: { primary: '#fff' },
      },
    },
  },
});

export default theme;
