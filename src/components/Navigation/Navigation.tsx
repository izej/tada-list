import {AppBar, Box, Button, Typography, useMediaQuery} from "@mui/material";
import { Home, EventAvailable, Face2, EmojiEvents } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MobileNavIconWrapper,
  MobileNavItemWrapper,
  NavItem,
  NavItems,
  StyledBottomNavigation,
  StyledToolbar
} from "./StyledNavigation";
import { useTranslation } from 'react-i18next';
import {useAuth} from "providers/AuthContext";

const Navigation = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleNavChange = (path: string) => {
    navigate(path);
  };

  const navItems = [
    { label: t('menu.home'), icon: <Home />, path: "/" },
    { label: t('menu.calendar'), icon: <EventAvailable />, path: "/calendar" },
    { label: t('menu.achievements'), icon: <EmojiEvents />, path: "/achievements" },
    { label: t('menu.profile'), icon: <Face2 />, path: "/profile" },
  ];

  return isMobile ? (
    <StyledBottomNavigation value={value} showLabels={false}>
      {navItems.map((item) => (
        <MobileNavItemWrapper
          key={item.path}
          onClick={() => handleNavChange(item.path)}
        >
          <MobileNavIconWrapper selected={value === item.path}>
            {item.icon}
          </MobileNavIconWrapper>

        </MobileNavItemWrapper>
      ))}
    </StyledBottomNavigation>
  ) : (
    <AppBar position="static" color="transparent" elevation={0} variant={"outlined"}>
      <StyledToolbar>

        <Box component="img" src="/logo.png" alt="Tada! List logo" sx={{ height: '70px' }} />

        <NavItems>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              current={value === item.path}
              onClick={() => handleNavChange(item.path)}
            >
              <Box className="icon-wrapper">{item.icon}</Box>
              <Typography variant="caption">{item.label}</Typography>
            </NavItem>
          ))}
        </NavItems>

        <div>
        <Button variant="text" onClick={handleLogout}> Logout </Button>
        </div>

      </StyledToolbar>
    </AppBar>
  );
};

export default Navigation;
