import React from 'react'
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';
import Pages from './Pages/Pages';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + '/#/'}>
        <div className="App">
          <Header/>
          <Switch>
            <Pages/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
