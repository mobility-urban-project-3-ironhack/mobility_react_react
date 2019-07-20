import React from 'react';
import HeaderNav from './misc/HeaderNav';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Results from './Results';
import Footer from './misc/Footer';
import PrivateRoute from '../guards/PrivateRoute';
import Historical from './Historical';
import { MDBContainer } from 'mdbreact';



function App() {
  return (
    <MDBContainer fluid  color='primary-color' className="App">
      <HeaderNav/>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/results' component={Results}/>
        <PrivateRoute exact path='/historical' component={Historical}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
      <Footer/>
    </MDBContainer>
  );
}

export default App;


