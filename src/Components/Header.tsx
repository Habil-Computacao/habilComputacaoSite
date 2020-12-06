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
          <MDBNavbar expand="md" className='z-depth-0'>

            <MDBNavbarBrand className='w-auto'>
              <MDBMedia>
                <MDBNavLink to='/'>
                  <MDBMedia object id="leftLogo" src={process.env.PUBLIC_URL + "/logo192.jpg"} alt="Logo da Hábil Computação" />
                </MDBNavLink>
              </MDBMedia>
            </MDBNavbarBrand>

            <MDBNavbarToggler image={`${process.env.PUBLIC_URL}/img/hamburger-menu-icon.png`} onClick={this.toggleCollapse} />

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

              <MDBNavbarNav right>
                <MDBNavItem className='mt-4 mb-2'>
                  <MDBMedia>
                    <a href="https://www.99freelas.com.br/user/habil-computacao" target='_blank' rel='noreferrer'>
                      <MDBMedia object id="rightLogo" className='rounded' src={process.env.PUBLIC_URL + "/img/99freelas.png"} alt="Logo da 99Freelas"  />
                    </a>
                  </MDBMedia>
                </MDBNavItem>
              </MDBNavbarNav>

            </MDBCollapse>

          </MDBNavbar>
        </MDBContainer>
      </header>
    )
  }
}
