import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="default-color" className="font-small">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="4" className='my-2 px-5'>
            <span>
             Bootcamp Web Development - Final project .
            </span>
          </MDBCol>
          <MDBCol md="4" className="d-flex flex-row justify-content-center">
            <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
            <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
            <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
          </MDBCol>
          <MDBCol md='4' className='my-2 px-5 text-right'>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000">Mobility Urban </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}

export default Footer;