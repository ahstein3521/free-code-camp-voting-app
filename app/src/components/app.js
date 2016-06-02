import React from 'react';
import { Component } from 'react';
require('../../style/style.scss');

export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
