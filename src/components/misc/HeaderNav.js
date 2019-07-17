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
import { AuthContext } from '../../contexts/AuthStore';
import { SearchContext } from '../../contexts/SearchStore';


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
                  {!this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink to="/login"><MDBIcon icon="sign-in-alt" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                  )}
                  {!this.props.results > 0 && (
                  <MDBNavItem>
                      <MDBNavLink onClick={()=>this.props.handleResultsChange()} to="/"><MDBIcon icon="search" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                  )}
                  {this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink to="/historical"><MDBIcon icon="history" size="2x"/></MDBNavLink>
                  </MDBNavItem>
                  )}
                  {this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink onClick={()=>this.props.onUserChange()} to="/">
                        <MDBIcon icon="sign-out-alt" size="2x" className="red-text pr-3"/>
                      </MDBNavLink>
                  </MDBNavItem>
                  )}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
    );
  }
}

const HeaderNavWithAuthContext = loginProps => (
  <AuthContext.Consumer>
    {consumerProps => (<HeaderNav {...consumerProps} {...loginProps} />)}
  </AuthContext.Consumer>
)


const HeaderNavWithAuthContextWithSearchStore = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => <HeaderNavWithAuthContext {...consumerProps} {...searchProps} /> }
  </SearchContext.Consumer>
)

export default HeaderNavWithAuthContextWithSearchStore;