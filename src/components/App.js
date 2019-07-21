import React from 'react';
import HeaderNav from './misc/HeaderNav';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Search from './journey/Search';
import PrivateRoute from '../guards/PrivateRoute';
import Historical from './user/Historical'; 



function App() {
  return (
    <div  color='primary-color ' className="App">
      <HeaderNav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <PrivateRoute exact path='/search' component={Search}/>
        <PrivateRoute exact path='/historical' component={Historical}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;


