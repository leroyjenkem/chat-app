import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <p>I'm {this.props.age} years old</p>
      </div>
    );
  }
}

export default Hello;
