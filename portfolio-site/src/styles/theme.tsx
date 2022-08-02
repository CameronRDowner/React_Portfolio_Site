import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { radialOutAnimation, scaleInAnimation } from "./animations";

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
  breakpoints: {
    values: {
      xs: 320,
      sm: 481,
      md: 769,
      lg: 1025,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#6441a5",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export const pxToRem = theme.typography.pxToRem;

const themeOptions = {
  // ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          padding: "0 9px",
        },
        outlined: {
          borderRadius: "50px",
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "0.7rem 2rem",
          boxShadow: "unset",
        },
      },
    },
  },
};

theme = createTheme(theme, themeOptions);
