import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './components/search_container';
import BenchFormContainer from './components/benchform_container.js';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ SearchContainer } />
      <Route path="/benches/new" component={ BenchFormContainer } />
    </Route>
  </Router>
);

export default AppRouter;
