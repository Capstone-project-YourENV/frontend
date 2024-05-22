import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import theme from './styles/ConfigurationMUI';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StrictMode>
        <CssBaseline />
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
);
