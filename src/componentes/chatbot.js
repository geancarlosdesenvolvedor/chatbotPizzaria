import React, { Component } from 'react';
import './chat/chat.css';
import ChatHeader from './chat/chatHeader';
import ChatConversa from './chat/chatConversa';
import ChatMensagem from './chat/chatMensagem';

class Chatbot extends Component {
  render() {
    return (
        <div className="chatbot">
          <div className="chat-conteudo">
            <ChatHeader />
            <ChatConversa />
            <ChatMensagem />
          </div>
        </div>
    )
  }
}

export default Chatbot