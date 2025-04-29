import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Home, Login, PersonAdd } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle.tsx";

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

  useEffect(() => {
    console.log("Current theme mode:", theme.palette.mode);
  }, [theme.palette.mode]);


  return isMobile ? (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => handleNavChange(newValue)}
      showLabels
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1100 }}
    >

      {navItems.map(item => (
        <BottomNavigationAction
          key={item.path}
          label={item.label}
          value={item.path}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  ) : (
    <AppBar position="static"  color="primary" // Add this to use the theme's primary color
            sx={{
              bgcolor: 'background.paper' // This will use the theme's paper background color
            }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6"> Tada! List </Typography>
        <div style={{ display: "flex", gap: "1rem" }}>
          {navItems.map(item => (
            <Typography
              key={item.path}
              variant="button"
              sx={{
                cursor: "pointer",
                textDecoration: value === item.path ? "underline" : "none",
              }}
              onClick={() => handleNavChange(item.path)}
            >
              {item.label}
            </Typography>
          ))}
        </div>

        <ThemeToggle/>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
