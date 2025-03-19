import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Switch, FormControlLabel, useTheme, MenuItem, Select } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import { colors } from "@mui/material";

function Navbar() {
  const { darkMode, toggleDarkMode, setCheckboxColor } = useContext(ThemeContext); // ✅ Get setCheckboxColor from context
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

        {/* ✅ Dropdown to change checkbox color */}
        <Select
          defaultValue={colors.blue[500]}
          onChange={(e) => setCheckboxColor(e.target.value)}
          sx={{ mr: 2, color: theme.palette.primary.contrastText }}
        >
          <MenuItem value={colors.blue[500]}>Blue</MenuItem>
          <MenuItem value={colors.green[500]}>Green</MenuItem>
          <MenuItem value={colors.red[500]}>Red</MenuItem>
        </Select>

        <FormControlLabel control={<Switch checked={darkMode} onChange={toggleDarkMode} />} label={darkMode ? "Dark Mode" : "Light Mode"} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
