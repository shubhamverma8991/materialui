import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline, colors } from "@mui/material";

// ✅ Context is better without unnecessary values like `theme` itself.
// (Typically, context shares state & actions, not the whole theme)
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// ✅ Component function name should be PascalCase
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

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
      },
      // ❗️ MuiButton styles should go under `components` in MUI v5+
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
      },
    });
  }, [darkMode]);

  const contextValue = {
    darkMode,
    toggleDarkMode,
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
