import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact'
import React, { Component } from 'react'
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: '',
      isFormHalfFull: false,
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

 componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload);
 }

 componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload);
 }

 onUnload = e => {
  if(this.state.isFormHalfFull){
    e.preventDefault();
    e.returnValue = '';
  }
}

  sendEmail(event){
    this.setState({ isFormHalfFull: false }, () => {
      const subject = this.state.subject;
      const body = `${this.state.name} - ${this.state.email}%0a%0a${this.state.body}`;
      window.open(`mailto:habilcomputacao@gmail.com?subject=${subject}&body=${body}`, '_self');
      event.preventDefault();
    });
  }

  handleChange(event){
    const [id, value] = [event.target.id, event.target.value];
    this.setState({ [id]: value }, this.verifyFormFill);  
  }

  verifyFormFill(){
    if(this.state.name !== '' || this.state.email !== '' || this.state.subject !== '' || this.state.body !== '')
      this.setState({ isFormHalfFull: true });
    else
      this.setState({ isFormHalfFull: false });
  }
  
  render() {
    return (
      <div className='overflow'>
        <MDBCol md="12">
          <MDBRow center>
            <form className='w-100' onSubmit={this.sendEmail} >
              <p className="h5 text-center mb-4">Entre em Contato:</p>
              <div className="grey-text">
                <MDBInput id='name' value={this.state.name} onChange={this.handleChange}
                  label="Seu Nome" icon="user" group type="text" validate error="wrong" success="right" required />
                <MDBInput id='email' value={this.state.email} onChange={this.handleChange}
                  label="Seu Email" icon="envelope" group type="email" validate error="wrong" success="right" required />
                <MDBInput id='subject' value={this.state.subject} onChange={this.handleChange}
                  label="Assunto" icon="tag" group type="text" validate error="wrong" success="right" required />
                <MDBInput id='body' value={this.state.body} onChange={this.handleChange}
                  label="Sua Mensagem" icon="pencil-alt" type="textarea" rows="3" required />
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
        <Prompt when={this.state.isFormHalfFull} message='Esta página quer saber se você deseja mesmo sair - informações fornecidas podem ser perdidas.' />
      </div>
    )
  }
}
