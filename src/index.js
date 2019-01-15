import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Page from './containers/Page';
import configureStore from './store/store';

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>
, document.getElementById('root'));