import {AppBar, Box, Typography, useMediaQuery} from "@mui/material";
import { Home, Login, PersonAdd } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle.tsx";
import {
  MobileNavIconWrapper,
  MobileNavItemWrapper,
  NavItem,
  NavItems,
  StyledBottomNavigation,
  StyledToolbar
} from "./StyledNavigation.tsx";

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleNavChange = (path: string) => {
    navigate(path);
  };

  const navItems = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "Login", icon: <Login />, path: "/login" },
    { label: "Register", icon: <PersonAdd />, path: "/register" },
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

        <ThemeToggle />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navigation;