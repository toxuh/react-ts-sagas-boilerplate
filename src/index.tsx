import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import store from './store';
import I18nProvider from './i18n/I18nProvider';

import Dummy from './containers/Dummy/Dummy';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <Dummy />
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
