import React, { Component } from 'react';
import {Badge,Alert} from 'reactstrap';
import {connect} from 'react-redux';

class ChatConversa extends Component {

  renderMensagem(msg, autor){
    return (
      <div>
          {
            autor == 'user' && <span>
              <Badge color='primary'>Você disse:</Badge>
              <Alert color='primary'>{msg}</Alert>
            </span>
          }
          
          {
            autor == 'bot' && <span>
              <Badge color='warning'>Chatbot disse:</Badge>
              <Alert color='warning'>{msg}</Alert>
            </span>
          }
      </div>
    )
    
  }


  render() {
    return (
        <div className="chat-conversa">
          {JSON.stringify(this.props)}

            {
              this.props.mensagens.map(key =>{
                return this.renderMensagem(key,'user')
              })
            }       
            
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    mensagens: state.chat.mensagens

  }
}

export default connect(mapStateToProps,null)(ChatConversa)
