import React, { Component } from 'react';
import './Panel.css';
export default class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div> {this.props.text} </div>
      </div>
    )
  }
}
