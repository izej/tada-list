import {Button, IconButton} from '@mui/material';
import {LightMode, DarkMode} from '@mui/icons-material';
import {useThemeMode} from "providers/ThemeModeContext.tsx";
import {useTranslation} from "react-i18next";
import {ThemeMode} from "models/Theme.ts";

export enum ThemeToggleMode {
  ICON = 'ICON',
  TEXT = 'TEXT'
}

interface ThemeToggleProps {
  toggleMode?: ThemeToggleMode
}

const ThemeToggle = ({toggleMode = ThemeToggleMode.ICON}: ThemeToggleProps) => {
  const {toggleColorMode, mode} = useThemeMode();
  const {t} = useTranslation();

  return (toggleMode === ThemeToggleMode.TEXT ?
      <Button variant={'text'} onClick={toggleColorMode}>
        {mode === ThemeMode.LIGHT ? t("theme_toggle.dark") : t("theme_toggle.light")}
      </Button>
      :
      <IconButton onClick={toggleColorMode} color="primary">
        {mode === ThemeMode.LIGHT ? <DarkMode/> : <LightMode/>}
      </IconButton>
  );
};

export default ThemeToggle;
