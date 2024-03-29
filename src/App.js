import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/globalStyles';

import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import Layout from './components/Layout/Layout';

import store from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Layout>
  </Provider>
);

export default App;
