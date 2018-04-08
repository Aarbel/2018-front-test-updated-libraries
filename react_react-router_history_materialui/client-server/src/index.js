import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom'
import history from './history'

import App from './App';

ReactDOM.render((

    <Router history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <App />
        </MuiThemeProvider>
    </Router>

), document.getElementById('root'));
registerServiceWorker();
