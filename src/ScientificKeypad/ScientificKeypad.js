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
          <div className="scientifickeypad-item scikeypad-item-margin-right">
            <Button value="sin" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item scikeypad-item-margin-right">
            <Button value="cos" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="tan" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="scientifickeypad-row">
          <div className="scientifickeypad-item scikeypad-item-margin-right">
            <Button value="e" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item scikeypad-item-margin-right">
            <Button value={"\u213C"} buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item">
            <Button value="^" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="scientifickeypad-row">
          <div className="scientifickeypad-item scikeypad-item-margin-right scikeypad-item-left-round-corner">
            <Button value="!" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item scikeypad-item-margin-right">
            <Button value="exp" buttonValue={this.getButtonValue} />
          </div>
          <div className="scientifickeypad-item scikeypad-item-right-round-corner">
            <Button value="log" buttonValue={this.getButtonValue} />
          </div>
        </div>
      </div>
    )
  }
}
