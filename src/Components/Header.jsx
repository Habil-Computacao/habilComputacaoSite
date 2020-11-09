import React, { Component } from 'react'
import './header.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBMedia, MDBContainer, MDBNavbarToggler } from 'mdbreact'

export default class Header extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header>
        <MDBContainer fluid>
          <MDBNavbar expand="lg" className='z-depth-0'>
            <MDBNavbarBrand className='w-auto'>
              <MDBMedia>
                <MDBNavLink to='/'>
                  <MDBMedia object id="logo" src={process.env.PUBLIC_URL + "./logo192.jpg"} alt="Logo da Hábil Computação" />
                </MDBNavLink>
              </MDBMedia>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} className='grey lighten-5' />
            <MDBCollapse isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to='/'>INÍCIO</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/portfolio'>PORTFOLIO</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/contact'>CONTATO</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/about'>SOBRE</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </MDBContainer>
      </header>
    )
  }
}
