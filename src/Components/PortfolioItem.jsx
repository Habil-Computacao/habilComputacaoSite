import { MDBCol, MDBRow, MDBIcon, MDBMedia, MDBView } from 'mdbreact'
import React, { Component } from 'react'
import './portfolioitem.css'

export default class PortfolioItem extends Component {
  render() {
    return (
      <MDBCol size='12' className='my-4'>
        <MDBRow>
          <MDBCol size='12' lg='6' className='my-3'>
            <MDBMedia left>
              <div>
                <MDBView>
                  <MDBMedia
                    object
                    className="image"
                    src={process.env.PUBLIC_URL + this.props.image || "/"}
                    alt={this.props.imageAlt || ""}
                  />
                </MDBView>
              </div>
            </MDBMedia>
          </MDBCol>
          <MDBCol size='12' lg='6' className='my-3'>
            <h3 className="h3-responsive">{this.props.title || "NO TITLE"} <MDBIcon 
              fab={this.props.fab || false} 
              fas={this.props.fas || false}
              far={this.props.far || false} 
              size={this.props.iconSize || "1x"} 
              icon={this.props.icon || 'exclamation-triangle'} 
            /></h3>
            <p>{this.props.text}</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    )
  }
}
