import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#173B45',
    },
    secondary: {
      main: '#B43F3F',
    },
    warning: {
      main: '#FF8225',
    },
    background: {
      default: '#F8EDED',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#173B45',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#173B45',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#173B45',
    },
    secondary: {
      main: '#B43F3F',
    },
    warning: {
      main: '#FF8225',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F8EDED',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#173B45',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
