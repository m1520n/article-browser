import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import Home from './containers/Home/Home';
import Article from './containers/Article/Article';
import NotFound from './containers/NotFound/NotFound';

const App = () => (
  <>
    <Normalize />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" component={Article} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </>
);

export default App;
