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
  toggleMode?: ThemeToggleMode;
  value?: ThemeMode;
  onChange?: (theme: ThemeMode) => void;
}

const ThemeToggle = ({
  toggleMode = ThemeToggleMode.ICON,
  value,
  onChange
}: ThemeToggleProps) => {
  const {toggleColorMode, mode: contextMode} = useThemeMode();
  const {t} = useTranslation();

  const mode = value !== undefined ? value : contextMode;

  const handleToggle = () => {
    const newMode = mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    if (onChange) {
      onChange(newMode);
    } else {
      toggleColorMode();
    }
  };

  return (toggleMode === ThemeToggleMode.TEXT ?
      <Button variant={'text'} onClick={handleToggle}>
        {mode === ThemeMode.LIGHT ? t("theme_toggle.dark") : t("theme_toggle.light")}
      </Button>
      :
      <IconButton onClick={handleToggle} color="primary">
        {mode === ThemeMode.LIGHT ? <DarkMode/> : <LightMode/>}
      </IconButton>
  );
};

export default ThemeToggle;
