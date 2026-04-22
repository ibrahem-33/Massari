"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6",
    },
    secondary: {
      main: "#a855f7",
    },
    background: {
      default: "#f6f6f6",
    },
    text: {
      primary: "#213242",
    },
  },
});

export default function ThemeRegistry({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}