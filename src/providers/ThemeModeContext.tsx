import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {getTheme} from "../utils/Theme.tsx";

type ThemeMode = 'light' | 'dark';

const ThemeModeContext = createContext<{
  mode: ThemeMode;
  toggleColorMode: () => void;
}>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
