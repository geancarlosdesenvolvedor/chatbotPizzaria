import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import { Container } from './styles';

class Home extends Component {
  render() {
    return( 
        <div className="home">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button color="danger">Danger!</Button>
        </div>
    )
  }
}

export default Home
