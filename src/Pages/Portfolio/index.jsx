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
            <PortfolioItem onClick={this.triggerModal} image='/img/calendar.png' fab icon='react' title='ReactJS' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
            <PortfolioItem onClick={this.triggerModal} image='/img/superbolao.png' fab icon='python' title='Django + Python' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
            <PortfolioItem onClick={this.triggerModal} image='/img/googleglass.png' fab icon='js-square' title='Javascript + CSS' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
          </MDBRow>
        </MDBCol>
      </div>
    )
  }
}
