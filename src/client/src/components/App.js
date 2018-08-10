import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';

import forts from '../pkgs/fortawesome';

import * as c from './index';

import store from '../_store';

import { fontSize } from '../css/meta/font';

forts.forEach(fort => library.add(fort));

const style = {
  fontSize,
  height: '100vh',
  // width: '100%',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={style}>
            <Switch>
              <Route exact path="/about" component={c.Generic(c.About)} />
              <Route
                exact
                path="/dashboard"
                component={c.Generic(c.Dashboard)}
              />
              <Route exact path="/donate" component={c.Generic(c.Donate)} />
              <Route exact path="/login" component={c.Generic(c.Login)} />
              <Route exact path="/support" component={c.Generic(c.Support)} />
              <Route exact path="/" component={c.Generic(c.Landing)} />
              <Route path="/" component={c.Generic(c.Four04)} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
