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
    //cloudy-knoxville-gradient color-block-5 
    return(
      <header>
            <MDBNavbar color='cloudy-knoxville-gradient' dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/search">
                <img src='/images/logo_mu.png' style = {{"width" :40,"height":40}}/>
                  {/* <strong className='black-text'>Mobility Urban</strong> */}
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick }  />
              <MDBCollapse isOpen = { this.state.collapse } navbar >
                <MDBNavbarNav left >
                  <MDBNavItem>
                      <MDBNavLink to="/"><MDBIcon icon="home" size="2x" className='teal-text'/></MDBNavLink>
                  </MDBNavItem>
                  {!this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink to="/login"><MDBIcon icon="sign-in-alt" size="2x" className='indigo-text'/></MDBNavLink>
                  </MDBNavItem>
                  )}
                  {!this.props.results && (
                  <MDBNavItem>
                      <MDBNavLink onClick={()=>this.props.handleResultsChange()} to="/">
                        <MDBIcon icon="search" size="2x" className='teal-text'/>
                      </MDBNavLink>
                  </MDBNavItem>
                  )}
                  {this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink to="/historical"><MDBIcon icon="user-edit" size="2x" className='teal-text'/></MDBNavLink>
                  </MDBNavItem>
                  )}
                  {this.props.isAuthenticated() && (
                  <MDBNavItem>
                      <MDBNavLink onClick={()=>this.props.onUserChange()} to="/">
                        <MDBIcon icon="sign-out-alt" size="2x" className="grey-text pr-3"/>
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