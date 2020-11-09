import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact'
import React, { Component } from 'react'
import './index.css'

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: ''
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendEmail(event){
    const subject = this.state.subject;
    const body = `${this.state.name} - ${this.state.email}%0a%0a${this.state.body}`;
    window.open(`mailto:habilcomputacao@gmail.com?subject=${subject}&body=${body}`, '_self');
    event.preventDefault();
  }

  handleChange(event){
    const [id, value] = [event.target.id, event.target.value];
    this.setState({ [id]: value });
  }
  
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBCol md="12">
            <MDBRow center>
              <form className='w-100' onSubmit={this.sendEmail} >
                <p className="h5 text-center mb-4">Entre em Contato:</p>
                <div className="grey-text">
                  <MDBInput id='name' value={this.state.name} onChange={this.handleChange}
                    label="Seu Nome" icon="user" group type="text" validate error="wrong" success="right" />
                  <MDBInput id='email' value={this.state.email} onChange={this.handleChange}
                    label="Seu Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                  <MDBInput id='subject' value={this.state.subject} onChange={this.handleChange}
                    label="Assunto" icon="tag" group type="text" validate error="wrong" success="right" />
                  <MDBInput id='body' value={this.state.body} onChange={this.handleChange}
                    type="textarea" rows="3" label="Sua Mensagem" icon="pencil-alt" />
                </div>
                <div className="text-center">
                  <MDBBtn color="elegant" type='submit'>
                    Enviar
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>
    )
  }
}
