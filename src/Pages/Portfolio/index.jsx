import { MDBCarousel, MDBCarouselInner, MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import React, { Component } from 'react'
import CarouselItem from '../../Components/CarouselItem'
import './index.css'

export default class Portfolio extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCol size='12'>
          <MDBRow center>
            <p>Um é graduando de um Bacharelado Interdisciplinar em Ciência e Tecnologia com foco em Ciência da Computação na Universidade Federal da Bahia (UFBA), tendo experiência com desenvolvimento web através de atuações numa EJCET relacionada à UFBA. </p>
            <p>O outro, estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e Tecnologia da Bahia, tem experiência em suporte de campo em empresas locais, além de um histórico de contribuição para projetos de código aberto. Atualmente, está atuando em um projeto do Instituto Nacional de Pesquisas Espaciais  </p>
              <MDBCarousel
              activeItem={1}
              length={3}
              showControls
              showIndicators
              className="z-depth-1"
              >
                <MDBCarouselInner>
                  <CarouselItem itemId='1' localPath='/img/calendar.png' imageAlt='Calendário' link='https://daviprios.github.io/calendar/' title='Calendário' text='Um simples calendário' />
                  <CarouselItem itemId='2' localPath='/img/calendar.png' imageAlt='Calendário' link='https://daviprios.github.io/calendar/' title='Calendário' text='Um simples calendário' />
                  <CarouselItem itemId='3' localPath='/img/calendar.png' imageAlt='Calendário' link='https://daviprios.github.io/calendar/' title='Calendário' text='Um simples calendário' />
                </MDBCarouselInner>
              </MDBCarousel>
          </MDBRow>
        </MDBCol>
      </MDBContainer>
    )
  }
}
