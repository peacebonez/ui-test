import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 18,
      },
    },
    MuiInput: {
      root: {
        fontSize: 18,
      },
    },
  },
  typography: {
    fontFamily: '"Lato,sans-serif"',
    fontSize: 12,
  },
  palette: {
    primary: { main: "#0094CA", green: "#53A596", navy: "#232338" },
    secondary: { main: "#4A4A4A" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 767,
      lg: 1280,
      xl: 1920,
    },
  },
})
