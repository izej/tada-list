import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useColorScheme } from '@mui/material/styles';

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeToggle;
