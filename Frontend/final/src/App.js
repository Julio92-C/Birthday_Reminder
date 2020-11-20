import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import data from './data';
// import List from './List';


import { Admin } from './components/Admin'
import { Home } from './components/Home'
import { Test } from './components/Test'


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={Admin} />
        <Route path='/test' component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
