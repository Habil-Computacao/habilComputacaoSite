import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBMedia, MDBContainer } from 'mdbreact'
import './index.css'

export default class About extends Component {
  render() {
    return (
      <div className='overflow'>
        <MDBContainer>
          <MDBCol size='12'>
            <MDBRow center>

              <p>A Hábil Computação nasceu da amizade entre dois desenvolvedores do nordeste brasileiro. Mesmo com o grande impacto econômico da crise do coronavírus, eles se uniram com o objetivo de criar uma startup de tecnologia que aliasse todos os conhecimentos diferentes que ambos reuniram durante os anos de estudo.</p>

              <MDBMedia tag='li'>
                <MDBRow className='my-5'>
                  <MDBCol lg='3' size='12'>
                    <MDBRow center>
                      <MDBMedia object className="foto my-3" src={process.env.PUBLIC_URL + "./img/davi.jpeg"} alt="Foto de Davi Rios"/>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg='9' size='12'>
                    <MDBRow center>
                      <MDBMedia body>
                        <MDBMedia heading>
                          Davi Rios
                        </MDBMedia>
                        Graduando de um Bacharelado Interdisciplinar em Ciência e Tecnologia com foco em Ciência da Computação na Universidade Federal da Bahia (UFBA), tendo experiência com desenvolvimento web através de atuações numa EJCET relacionada à UFBA.
                      </MDBMedia>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBMedia>

              <MDBMedia tag='li'>
                <MDBRow className='my-5'>
                  <MDBCol lg='3' size='12'>
                    <MDBRow center>
                      <MDBMedia object className="foto my-3" src={process.env.PUBLIC_URL + "./img/gabriel.png"} alt="Foto de Gabriel Reis"/>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg='9' size='12'>
                    <MDBRow center>
                      <MDBMedia body>
                        <MDBMedia heading>
                          Gabriel dos Reis
                        </MDBMedia>
                        O outro, estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e Tecnologia da Bahia, tem experiência em suporte de campo em empresas locais, além de um histórico de contribuição para projetos de código aberto. Atualmente, está atuando em um projeto do Instituto Nacional de Pesquisas Espaciais.
                      </MDBMedia>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBMedia>

            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>
    )
  }
}