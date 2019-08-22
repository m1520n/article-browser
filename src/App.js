import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import Home from './containers/Home/Home';
import Article from './containers/Article/Article';
import NotFound from './containers/NotFound/NotFound';

import store from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <Normalize />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles/:id" component={Article} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
