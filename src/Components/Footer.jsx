import React, { Component } from 'react'
import './footer.css'
import { MDBFooter, MDBContainer } from 'mdbreact'

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter className="footer">
        <MDBContainer fluid className="fixed-bottom text-md-center">
          &copy; {new Date().getFullYear()} Copyright: habilcomputacao@gmail.com
        </MDBContainer>
      </MDBFooter>
    )
  }
}
