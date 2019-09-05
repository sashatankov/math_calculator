import React, { Component } from 'react';
import './Button.css';
export default class Button extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.value = this.props.value;
    this.class = "button";
    this.isPressed = false;
  }
  handleClick() {

    this.props.buttonValue(this.value);
  }
  render() {
    return (
      <div className="button" onClick={this.handleClick}>
        { this.value }
      </div>
    )
  }
}
