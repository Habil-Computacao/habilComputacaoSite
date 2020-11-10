import { MDBRow, MDBCol } from 'mdbreact'
import React, { Component } from 'react'
import PortfolioItem from '../../Components/PortfolioItem'
import './index.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='overflow'>
        <MDBCol size='12' className='my-5'>
          <MDBRow center>
            <PortfolioItem image='/img/calendar.png' fab icon='react' title='ReactJS' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
            <PortfolioItem image='/img/superbolao.png' fab icon='python' title='Django + Python' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
            <PortfolioItem image='/img/googleglass.png' fab icon='js-square' title='Javascript + CSS' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi amet repellendus beatae. Quos animi nemo ad! Soluta, repellendus reprehenderit ut nobis libero fugiat quibusdam quia officia corrupti maiores molestiae.' />
          </MDBRow>
        </MDBCol>
      </div>
    )
  }
}
