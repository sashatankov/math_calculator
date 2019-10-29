import React, { Component } from 'react';
import Button from "../Button/Button";
import "./DerivativeKeypad.css"
import ScientificKeypad from "../ScientificKeypad/ScientificKeypad";
import Keypad from "../keypad/Keypad";

export default class DerivativeKeypad extends Keypad {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="derivativekeypad">
        <div className="derivativekeypad-row">
          <div className="derivativekeypad-item derkeypad-item-margin-right">
            <Button value="sin" buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item derkeypad-item-margin-right">
            <Button value="cos" buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item">
            <Button value="tan" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="derivativekeypad-row">
          <div className="derivativekeypad-item derkeypad-item-margin-right">
            <Button value="e" buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item derkeypad-item-margin-right">
            <Button value={"\u213C"} buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item">
            <Button value="^" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="derivativekeypad-row">
          <div className="derivativekeypad-item derkeypad-item-margin-right derkeypad-item-left-round-corner">
            <Button value="x" buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item derkeypad-item-margin-right">
            <Button value="exp" buttonValue={this.getButtonValue} />
          </div>
          <div className="derivativekeypad-item derkeypad-item-right-round-corner">
            <Button value="log" buttonValue={this.getButtonValue} />
          </div>
        </div>

      </div>
    )
  }
}
