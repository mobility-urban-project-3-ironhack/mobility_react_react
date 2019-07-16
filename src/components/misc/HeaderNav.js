import React from 'react';
import { 
  MDBNavbar,
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavbarToggler, 
  MDBCollapse,
  MDBNavItem, 
  MDBNavLink, 
  MDBIcon } from 'mdbreact';


class HeaderNav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    // para cambiar el background del navbar -- const bgPink = {backgroundColor: '#e91e63'}
    return(
      <header>
            <MDBNavbar color='default-color' dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Mobility Urban</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/"><MDBIcon icon="home" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/login"><MDBIcon icon="sign-in-alt" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/logout"><MDBIcon icon="sign-out-alt" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
    );
  }
}

export default HeaderNav;