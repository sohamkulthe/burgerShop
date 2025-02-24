import { createTheme } from '@mui/material/styles';
// Color Palette
const colors = {
  primary: {
    main: '#1976d2', // blue
    contrastText: '#fff',
  },
  secondary: {
    main: '#d32f2f', // red
    contrastText: '#fff',
  },
  background: {
    default: '#f4f6f8',
    paper: '#fff',
  },
  black: {
    main:'#000000',
  }
};

// Typography Styles
const typography = {
  //fontFamily: 'Roboto, Arial, sans-serif',
 // fontFamily:'Roboto, Arial, sans-serif',
  li:{
    fontWeight: '600',
    color: '#0000',
  },
  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: '3rem',
    color: '#0000',
  },
  h2: {
    fontWeight: 600,
    fontSize: '2rem',
  },
  body1: {
    fontSize: '1rem',
    color: '#333',
  },
};

// Breakpoints for Responsive Design
const breakpoints = {
  values: {
    xs: 0,   // 0px
    sm: 600, // 600px
    md: 960, // 960px
    lg: 1280, // 1280px
    xl: 1920, // 1920px
  },
};

// Custom MUI Theme
const theme = createTheme({
  palette: colors,
  typography: typography,
  breakpoints: breakpoints,
  components: {
    // Override default styles for MUI components
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove uppercase for buttons
          padding: '8px 16px', // Adjust button padding
        },
      },
    },
    MuiAppBar:{
        styleOverrides:{
            root:{
                backgroundColor: '#ffff',
            },    
        },
            
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: colors.primary.main, // Apply primary color to h1
        },
      },
    },
  },
});

export default theme;
