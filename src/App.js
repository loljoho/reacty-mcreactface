import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import './App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" name="Home" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
