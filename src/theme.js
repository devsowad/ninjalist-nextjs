import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#201C21",
      main: "#121013",
      dark: "#0B090B",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#FFFAFF",
      dark: "#EBEBEB",
    },
    background: {
      default: "#f5eded",
    },
  },
})

responsiveFontSizes(theme)

export default theme
