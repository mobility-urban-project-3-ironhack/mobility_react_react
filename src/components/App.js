import React from 'react';
import HeaderNav from './misc/HeaderNav';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Results from './Results';
import Footer from './misc/Footer';



function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/results' component={Results}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;


