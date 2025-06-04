import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {getTheme} from "../utils/Theme.tsx";
import {ThemeMode as ThemeModeEnum} from "models/Theme.ts";

export type ThemeMode = ThemeModeEnum.LIGHT | ThemeModeEnum.DARK;

const ThemeModeContext = createContext<{
  mode: ThemeMode;
  toggleColorMode: () => void;
}>({
  mode: ThemeModeEnum.LIGHT,
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeModeEnum.LIGHT);

  const toggleColorMode = () => {
    setMode((prev) => (prev === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT));
  };

  const theme = useMemo(() => getTheme(mode === ThemeModeEnum.LIGHT ? 'light' : 'dark'), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
