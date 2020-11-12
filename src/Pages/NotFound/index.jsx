import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBMedia, MDBNavLink} from 'mdbreact'

export default class NotFound extends Component {
  render() {
    return (
      <div className='overflow'>
        <MDBCol size='12' className='my-5'>
          <MDBRow center>
            <h1 className="title">Erro 404 - Página não Encontrada.</h1>
            <h2 className="title">Clique no logo abaixo para voltar ao index do site.</h2>
            <MDBNavLink to='/'><MDBMedia object id="mainLogo" src={process.env.PUBLIC_URL + "/logo193.jpg"} alt="Logo da Hábil Computação"/></MDBNavLink>
          </MDBRow>
        </MDBCol>
      </div>
    )
  }
}
