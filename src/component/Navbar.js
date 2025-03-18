import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Switch, FormControlLabel, useTheme } from "@mui/material";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mui Test
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label={darkMode ? "Dark Mode" : "Light Mode"}
          sx={{ color: theme.palette.primary.contrastText }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
