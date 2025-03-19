import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline, colors } from "@mui/material";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
  checkboxColor: colors.blue[500], // ✅ Add checkboxColor to context
  setCheckboxColor: () => {}, // ✅ Function to update checkbox color
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [checkboxColor, setCheckboxColor] = useState(colors.blue[500]); // ✅ Store checkboxColor

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(() => {
    const primaryColor = darkMode
      ? {
          main: colors.deepPurple[700],
          light: colors.deepPurple[500],
          dark: colors.deepPurple[900],
          contrastText: "#fff",
        }
      : {
          main: colors.grey[700],
          light: colors.grey[500],
          dark: colors.blue[900],
          contrastText: "#fff",
        };

    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: primaryColor,
        checkbox: { main: checkboxColor }, // ✅ Use checkboxColor from state
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: "primaryOutlinedCustom" },
              style: ({ theme }) => ({
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  borderColor: theme.palette.primary.main,
                },
              }),
            },
          ],
        },
        MuiCheckbox: {
          variants: [
            {
              props: { variant: "customCheckBox" },
              style: ({ theme }) => ({
                color: theme.palette.checkbox.main,
                "&.Mui-checked": {
                  color: theme.palette.checkbox.main,
                },
              }),
            },
          ],
        },
      },
    });
  }, [darkMode, checkboxColor]); // ✅ Rerun theme when checkboxColor changes

  const contextValue = {
    darkMode,
    toggleDarkMode,
    checkboxColor, // ✅ Provide checkboxColor in context
    setCheckboxColor, // ✅ Allow components to update checkboxColor
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
