import React from 'react';
import { MDBContainer  } from 'mdbreact';
import { Link } from 'react-router-dom';
import '../home.css'
import { AuthContext } from '../contexts/AuthStore';



class Home extends React.Component {

  render() {
    return (    
      <MDBContainer fluid className="text-center m-0 p-0" style={{backgroundColor: '#fafafa '}}>
        <div style = {{"width" :'100%',"height":'75vh'}} className ='d-inline-flex flex-column justify-content-center align-items-center bg-image'>
   
        <div style={{position: 'relative'}}>
          <img src="/images/logo_mu1.png" className="" alt="Movility Urban"/>
          <img src="/images/logo_mu2.png" className="imgr" alt="Movility Urban" style={{position: 'absolute',top: 0,left: 0 }}/>
        </div>
            
          <h1 className='mt-4' style={{'color':'#33435c'}}><strong >MOBILITY URBAN</strong></h1>
        </div>
        {this.props.isAuthenticated() && (
          <div style = {{"width" :'100%',"height":'25vh','backgroundColor': '#2bbbad'}} className ='d-inline-flex flex-column justify-content-around align-items-center pl-5 pr-5 pt-3 pb-3'>
            <Link className="btn btn-light btn-lg btn-block" to='/search'>Move on!</Link>  
          </div>
        )}
        {!this.props.isAuthenticated() && (
          <div style = {{"width" :'100%',"height":'25vh','backgroundColor': '#2bbbad'}} className ='d-inline-flex flex-column justify-content-around align-items-center pl-5 pr-5 pt-3 pb-3'>
          <Link className="btn btn-light btn-lg btn-block" to='/register'>Register</Link>  
          <Link className="btn btn-light btn-lg btn-block" to='/login'>Sign In</Link>
          </div>
        )}
      </MDBContainer>
    )
  }
} 
  


const HomeWithAuthContext = loginProps => (
  <AuthContext.Consumer>
    {consumerProps => (<Home {...consumerProps} {...loginProps} />)}
  </AuthContext.Consumer>
)

export default HomeWithAuthContext;


