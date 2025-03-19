import React, { useContext } from "react";
import { Container, Typography, Paper, Box, Button, Checkbox } from "@mui/material";
import { ThemeContext } from "../ThemeContext";

function Homepage() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website!
        </Typography>
        <Typography variant="body1">
          This is some sample content. You can switch between light and dark modes using the toggle in the navigation bar.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">This is a box with elevation.</Typography>
          <Button variant="primaryOutlinedCustom">Hello There !</Button>
          <Checkbox variant="customCheckBox" checked={darkMode} onChange={toggleDarkMode} />
        </Box>
      </Paper>
    </Container>
  );
}

export default Homepage;
