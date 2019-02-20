import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Home from './componentes/home';
import Chatbot from './componentes/chatbot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App">
          <Home />
          <Chatbot />      
        </div>
        <Footer />  
      </div>
    );
  }
}

export default App;
