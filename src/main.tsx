import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7091e6',
      light: '#ede8f5',
    },
    secondary: {
      main: '#807fd9',
      light: '#adbbda',
    },
  },
  typography: {
    fontFamily: [
      'Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif' 
    ].join(','),

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          borderRadius: '10px',
          padding: '10px 20px',
        },
        containedPrimary: {
          backgroundColor: '#7091e6',
          '&:hover': {
            backgroundColor: '#6079cc',
          },
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="root" style={{backgroundColor: "white"}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </div>
  </React.StrictMode>,
)
