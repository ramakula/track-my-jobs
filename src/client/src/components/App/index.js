import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '../../store';

import * as c from '../';

import * as css from './css';

import init from './init';

init();

export default _ => {
  return (
    <Provider store={store}>
      <PersistGate loading={<c.Loading />} persistor={persistStore(store)}>
        <Router>
          <div className="App" style={css.App()}>
            <Switch>
              <Route exact path="/about" component={c.About} />
              <Route exact path="/dashboard" component={c.Dashboard} />
              <Route exact path="/donate" component={c.Donate} />
              <Route exact path="/login" component={c.Login} />
              <Route exact path="/support" component={c.Support} />
              <Route exact path="/" component={c.Landing} />
              <Route path="/" component={c.Four04} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};
