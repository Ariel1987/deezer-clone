import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalSyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from  './styles/Theme';
import configureStore from './config/reduxConfig'; 

const initialState = {};
const store = configureStore(initialState);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <ThemeProvider theme={theme}>
        <App />
        <GlobalSyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
