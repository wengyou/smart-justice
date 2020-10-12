import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store.js';
import './index.scss';
import 'antd/dist/antd.css';
import './static/reset.css';
import './static/global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
