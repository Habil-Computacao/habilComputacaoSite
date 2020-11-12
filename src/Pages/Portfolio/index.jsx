import { MDBRow, MDBCol } from 'mdbreact'
import React, { Component } from 'react'
import PortfolioItem from '../../Components/PortfolioItem'
import './index.css'

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModal: false,
      src: '',
      caption: '',
    }

    this.triggerModal = this.triggerModal.bind(this);
  }

  triggerModal(src, caption){
    this.setState({
      isModal: true,
      src: process.env.PUBLIC_URL + src,
      caption,
    });
  }

  render() {
    return (
      <div className='overflow'>
        { this.state.isModal ?
        <div className='portfolio-modal' onClick={ () => {this.setState({ isModal: false }); console.debug(this.state);} }>
          <img src={this.state.src} className='portfolio-modal-image' alt={this.state.caption} />
          <div className='portfolio-modal-caption' >{this.state.caption}</div>
        </div>
        : '' }
        <MDBCol size='12' className='my-5'>
          <MDBRow center>
            <PortfolioItem onClick={this.triggerModal} image='/img/calendar.png' alt='Calendário' fab icon='react' title='ReactJS' text='Capacidade para desenvolver e realizar manutenções em sites com a tecnologia React, sozinha ou integrada a outros Frameworks.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/superbolao.png' alt='Site de bolão da Copa do Mundo de 2014' fab icon='python' title='Django + Python' text='Criação de websites com sistemas de autenticação de usuário, camada de negócio e acesso a bancos de dados, seja ele qual o cliente preferir.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/googleglass.png' alt='Site para Propaganda do Google Glass' fab icon='js-square' title='Javascript + CSS' text='Desenvolvimento de sites responsivos, interativos e voltados para acessibilidade, atraindo o usuário pela beleza e dinamicidade independente do dispositivo que ele esteja utilizando.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/python.png' alt='Tabela com dados de um mercado.' fab icon='python' title='Análise de Dados' text='Analisar massas de dados, como planilhas, e gerar informação de suporte e confiança através da utilização de algoritmos escritos com python e panda'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/grafico.png' alt='Gráfico de infecção do covid-19.' fab icon='python' title='Criação de Gráficos com Panda' text='Analisar massas de dados e gerar gráficos a partir delas.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/java.png' alt='Gerador de Operações Matemáticas' fab icon='java' title='Java' text='Desenvolvimento de aplicações para Sistemas Operacionais ou voltadas para WEB utilizando Java.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/snake.png' alt='Jogo da Cobra feito em C' fas icon='copyright' title='C' text='Aplicações para Sistemas Operacionais com a linguagem C, que, apesar de antiga, é bastante poderosa e otimizada.'/>
            <PortfolioItem onClick={this.triggerModal} image='/img/c++.png' alt='Robocode' fas icon='desktop' title='C++' text='Criação de programas com a linguagem C++, sucessora da linguagem C. Excelente opção para quando não se deseja utilizar todos os pormenores da linguagem C, já que o poder que ela possui vem com uma grande complexidade.'/>
          </MDBRow>
        </MDBCol>
      </div>
    )
  }
}
