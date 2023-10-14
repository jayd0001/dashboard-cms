import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles';

// Theme
import theme from './theme';
import './assets/scss/index.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

// Routes
import Routes from './Routes';

// Browser history
const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
