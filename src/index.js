import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import store from './store';
import submitHandler from './submitHandler';
import HexOceanForm from './HexOceanForm.js';
import theme from "./theme";
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <HexOceanForm onSubmit={submitHandler} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);