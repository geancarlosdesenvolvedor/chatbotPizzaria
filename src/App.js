import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Home from './componentes/home';
import { Provider } from 'react-redux';
import store from './store';
import Chatbot from './componentes/chatbot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Header />
          <Home />
          <Chatbot />      
          <Footer />  
        </div>
      </Provider>
    );
  }
}
export default App