import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f26b38',
      dark: '#d95325',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#477b53',
    },
    background: {
      default: '#fffdfa',
      paper: '#ffffff',
    },
    text: {
      primary: '#29251f',
      secondary: '#837d76',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 800,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
})

export default theme
