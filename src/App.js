import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Switchy McSwitchface */}
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
