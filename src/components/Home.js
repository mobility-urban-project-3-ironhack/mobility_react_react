import React from 'react';
import { MDBContainer  } from 'mdbreact';
import { Link } from 'react-router-dom';

const Home = () => (    
  <MDBContainer className="text-center mt-3 pt-5 px-5 prueba" style={{backgroundColor: '#fafafa '}}>
    <Link class="btn btn-light" to='/login'>Sign In</Link>
    <Link class="btn btn-light" to='/register'>Register</Link>    
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
 