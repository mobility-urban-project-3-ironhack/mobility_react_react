import React from 'react';
import { MDBContainer  } from 'mdbreact';
import { Link } from 'react-router-dom';
import '../home.css'

const Home = () => (    
  <MDBContainer className="text-center m-0 p-0" style={{backgroundColor: '#fafafa '}}>
    <div style = {{"width" :'100%',"height":'75vh'}} className ='d-inline-flex flex-column justify-content-center align-items-center bg-image'>
      <img src='/images/logo_mu.png' style = {{"width" :200,"height":200}}/>  
      <h1 className='mt-4' style={{'color':'#33435c'}}><strong >MOBILITY URBAN</strong></h1>
    </div>
    <div style = {{"width" :'100%',"height":'25vh','backgroundColor': '#2bbbad'}} className ='d-inline-flex flex-column justify-content-around align-items-center pl-5 pr-5 pt-3 pb-3'>
      <Link className="btn btn-light btn-lg btn-block" to='/register'>Register</Link>  
      <Link className="btn btn-light btn-lg btn-block" to='/login'>Sign In</Link>
     
    </div>
    
  
  </MDBContainer>
)
  
export default Home;

/* 
        <button className='btn btn-danger' onClick={()=>{this.setState({minimice: true},
           ()=>{console.log('minimie')})}}>minimice</button>
        <div 
        className={(!this.state.minimice) 
          ? 'w-100 d-flex flex-column bg-success prueba'
          : 'w-25 d-flex flex-column bg-primary prueba' }
        style={{  
          height: '300px',
        }}>
sadfas
        </div> */
 