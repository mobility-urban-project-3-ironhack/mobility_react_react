import React from "react";
import { MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color='cloudy-knoxville-gradient' dark className="black-text font-small fixed-bottom d-flex justify-content-between flex-wrap">
      <div className='my-2 px-5 text-center'>
        <span>Bootcamp Web Development - <strong>Final project</strong></span>
      </div>
      <div className='my-2 px-5 text-center'>
        &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000"><strong>Mobility Urban</strong> </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;