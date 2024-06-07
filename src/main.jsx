import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import App from './App';
import './styles/index.css';
import theme from './styles/ConfigurationMUI';
import store from './states';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MantineProvider>
        <BrowserRouter>
          <StrictMode>
            <CssBaseline />
            <App />
          </StrictMode>
        </BrowserRouter>
      </MantineProvider>
    </ThemeProvider>
  </Provider>,
);
