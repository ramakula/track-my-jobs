import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as c from '.';

export default _ => (
  <div className="App">
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
);
