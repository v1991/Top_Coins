import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Index from './components/layout/Index';
import Graph  from './components/liquidity/Graph'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/liquidity" component={Graph}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
