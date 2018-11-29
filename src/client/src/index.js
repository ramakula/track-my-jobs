import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import store from './store';
import init from './init';

import App from './components/App';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

import './index.css';

init();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistStore(store)}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
