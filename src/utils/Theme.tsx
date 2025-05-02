import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }

  interface Theme {
    custom: {
      nav: {
        iconHeight: number;
        iconWidth: number;
        iconPaddingX: number;
        gap: number;
        toolbarMinHeight: number;
      };
      spacingSizes: {
        xxs: number;
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
      };
      margins: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      nav?: {
        iconHeight?: number;
        iconWidth?: number;
        iconPaddingX?: number;
        gap?: number;
        toolbarMinHeight?: number;
      };
      spacingSizes?: {
        xxs?: number;
        xs?: number;
        s?: number;
        m?: number;
        l?: number;
        xl?: number;
      };
      margins?: {
        none?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
    };
  }
}

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: { light: '#cbc2e5', main: '#AD9FD5', dark: '#8f7cc5'},
          secondary: { light: '#e5c2dc', main: '#D59FC7', dark: '#c57cb2'},
          tertiary: { light: '#c2dce5', main: '#9FC7D5', dark: '#7cb2c5'},
          background: { default: '#FFF8E7', paper: '#ffffff' },
          accent: { light: '#dce5c2', main: '#C7D59F', dark: '#b2c57c', contrastText: '#1a1a1a' },
          text: { primary: '#1a1a1a' },
        }
        : {
          primary: {light: '#ead888', main: '#e2ca5d', dark: '#dabc32'},
          secondary: { light: '#EAE8FF', main: '#EAE8FF', dark: '#bbb5ff'},
          tertiary: { light: '#E8FFF6', main: '#E8FFF6', dark: '#b5ffe2'},
          background: { default: '#8D6B94', paper: '#1e1e1e' },
          accent: { light: '#dce5c2', main: '#C7D59F', dark: '#b2c57c', contrastText: '#1a1a1a' },
          text: { primary: '#FFF8E7' },
        }),
    },
    spacing: 8,
    shape: {
      borderRadius: 12,
    },
    custom: {
      nav: {
        iconHeight: 40,
        iconWidth: 40,
        iconPaddingX: 16,
        gap: 8,
        toolbarMinHeight: 72,
      },
      spacingSizes: {
        xxs: 2,
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
      },
      margins: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
      },
    },
  });
