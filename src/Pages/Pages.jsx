import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import { Route } from 'react-router-dom'
import './pages.css'

import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

export default class Pages extends Component {
  render() {
    return (
      <MDBContainer fluid id='content' className='my-5'>
        <MDBContainer>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </MDBContainer>
      </MDBContainer>
    )
  }
}
