import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Landing';

import { fontFamily, fontSize } from '../css/meta/font';

const style = {
  fontFamily,
  fontSize,
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={style}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
