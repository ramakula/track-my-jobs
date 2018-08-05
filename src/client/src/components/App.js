import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as c from './index';

import { fontSize } from '../css/meta/font';

const style = {
  fontSize,
  height: '100vh',
  // width: '100%',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={style}>
          <Switch>
            <Route exact path="/support" component={c.Generic(c.Support)} />
            <Route exact path="/donate" component={c.Generic(c.Donate)} />
            <Route exact path="/about" component={c.Generic(c.About)} />
            <Route exact path="/" component={c.Generic(c.Landing)} />
            <Route path="/" component={c.Generic(c.Four04)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
