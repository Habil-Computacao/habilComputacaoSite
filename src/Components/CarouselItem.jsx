import React, { Component } from 'react'
import { MDBCarouselItem, MDBView, MDBCarouselCaption, MDBMask } from 'mdbreact'

export default class CarouselItem extends Component {
  render() {
    return (
      <MDBCarouselItem itemId={this.props.itemId}>
        <MDBView>
            <img
              className="d-block"
              src={process.env.PUBLIC_URL + this.props.localPath || "/"}
              alt={this.props.imageAlt || ""}
            />
        <MDBMask overlay="black-light" />
        </MDBView>
        <MDBCarouselCaption>
          <a href={this.props.link || ""} target='_blank' rel='noreferrer'>
            <h3 className="h3-responsive">{this.props.title}</h3>
          </a>
          <p>{this.props.text}</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    )
  }
}
