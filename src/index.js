import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './containers/Page';
import configureStore from './store/store';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Page/>
        </Provider>
    </Router>
, document.getElementById('root'));