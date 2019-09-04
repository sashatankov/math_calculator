import React, { Component } from 'react';
import Keypad from "../keypad/Keypad";
import './ScientificKeypad.css';
import Button from "../Button/Button";
export default class ScientificKeypad extends Keypad {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="scientifickeypad">
        <div className="scientifickeypad-row">
          <div className="scientifickeypad-item">
            <Button value="sin" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="cos" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="tan" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="scientifickeypad-row">
          <div className="scientifickeypad-item">
            <Button value="e" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="&pi;" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="^" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="scientifickeypad-row">
          <div className="scientifickeypad-item">
            <Button value="!" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="(" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value=")" buttonValue={this.getButtonValue} />
          </div>
        </div>
      </div>
    )
  }
}
