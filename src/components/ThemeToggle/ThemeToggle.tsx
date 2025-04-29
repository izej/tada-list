import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import {useThemeMode} from "../../providers/ThemeModeContext.tsx";

const ThemeToggle = () => {
  const { toggleColorMode, mode } = useThemeMode();

  return (
    <IconButton onClick={toggleColorMode} color="primary">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggle;
