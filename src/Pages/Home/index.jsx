import React, { Component } from 'react'
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import './index.css'

export default class Home extends Component {
  render() {
    return (
        <MDBContainer>
          <MDBCol size='12'>
            <MDBRow center>
              <h1 class="title">Seja bem-vindo ao site da Hábil Computação!</h1>
              <h2 class="title">Aproveite sua visita, veja nossos projetos e entre em contato</h2>
              <p>Você pode contratar nossos serviços através do <a class="inline-link" href="https://www.99freelas.com.br/user/habil-computacao" target='_blank' rel='noreferrer'>99Freelas</a> e do <a class="inline-link" href="https://www.workana.com/freelancer/2d44151e86e725ba77ebbd1af1662c25?ref=user_dropdown" target='_blank' rel='noreferrer'>Workana</a></p>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
    )
  }
}
 