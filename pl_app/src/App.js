import React from 'react';
import DataTypes from './components/DataTypes/DataTypes';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/data_types'>Data Types</Link> 
            </li>
          </ul>
        </nav>
        <Switch>          
        <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/data_types'>
            <DataTypes/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
