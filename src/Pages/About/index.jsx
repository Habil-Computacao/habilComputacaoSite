import React, { Component } from 'react'
import { MDBRow, MDBContainer, MDBCol, MDBLink } from 'mdbreact'
import './index.css'

export default class About extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCol size='12'>
          <MDBRow center>
            <h1 className="text-center" class="title">Startup baiana de Tecnologia voltada para desenvolvimento de sistemas, principalmente aplicações WEB.</h1><br/>
            <br/>
            <p>Você pode acessar nossas produções na aba <MDBLink href="/portfolio" class="inline-link">Portfólio.</MDBLink></p>
          </MDBRow>
        </MDBCol>
      </MDBContainer>
    )
  }
}
