import React, { Component } from 'react'
import './footer.css'
import { MDBFooter, MDBContainer } from 'mdbreact'

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter className="footer">
        <MDBContainer fluid className="fixed-bottom text-md-center">
          <p id="footerStyle">&copy; {new Date().getFullYear()} - habilcomputacao@gmail.com</p>
        </MDBContainer>
      </MDBFooter>
    )
  }
}
