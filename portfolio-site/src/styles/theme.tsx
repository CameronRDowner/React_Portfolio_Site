import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export let theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: "#6441a5",
    },
  },
});

export const pxToRem = theme.typography.pxToRem;

theme = createTheme(theme, {
  palette: {},
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "0.7rem 2rem",
        },
      },
    },
  },
});
