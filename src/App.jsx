import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { view } from 'react-easy-state';

import Footer from './components/Footer';
import Routes from './Routes';
import TopNavigation from './components/TopNavigation';

const instance = createBrowserHistory();

const App = (props) => (
  <Router history={instance}>
    <div className="App">
      <TopNavigation {...props} />
      <Routes {...props} />
      <Footer {...props} />
    </div>
  </Router>
);

export default view(App);
