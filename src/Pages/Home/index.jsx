import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBMedia, MDBNavLink} from 'mdbreact'
import './index.css'

export default class Home extends Component {
  render() {
    return (
        <div className='overflow'>
          <MDBCol size='12' className='my-5'>
            <MDBRow center>
              <h1 class="title">Seja bem-vindo ao site da Hábil Computação, uma Startup baiana de Tecnologia voltada para desenvolvimento de sistemas.</h1>
              <h2 class="title">Aproveite sua visita, veja nossos projetos e entre em contato.</h2>
              <MDBNavLink to='/contact'><MDBMedia object id="mainLogo" src={process.env.PUBLIC_URL + "./logo193.jpg"} alt="Logo da Hábil Computação"/></MDBNavLink>
            </MDBRow>
          </MDBCol>
        </div>
    )
  }
}
 