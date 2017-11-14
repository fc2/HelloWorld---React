import React, { Component } from 'react';
import './HelloWorld.css';
import { Button } from 'react-bootstrap';

class HelloWorld extends Component {

constructor(props) {
  super(props);
    this.state = { greeting: 'Hello'};
    this.frenchify = this.frenchify.bind(this);
}

render() {
  return (
    <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <Button onClick={this.frenchify}>Frenchify!</Button>
    </div>
  );
}

frenchify(){
  this.setState({ greeting: 'Bonjour'});
}


}

export default HelloWorld;
