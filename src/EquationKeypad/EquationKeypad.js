import React from 'react';
import Keypad from "../keypad/Keypad";
import Button from "../Button/Button";
import './EquationKeypad.css'
export default class EquationKeypad extends Keypad {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="equationkeypad">
        <div className="equationkeypad-col">
          <div className="equationkeypad-item">
            <Button value="C" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="1" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="4" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="7" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="." buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="equationkeypad-col">
          <div className="equationkeypad-item">
            <Button value="x" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="2" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="5" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="8" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="0" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="equationkeypad-col">
          <div className="equationkeypad-item">
            <Button value="y" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="3" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="6" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="9" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="=" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="equationkeypad-col">
          <div className="equationkeypad-item">
            <Button value="z" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="+" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="-" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="*" buttonValue={this.getButtonValue} />
          </div>
          <div className="equationkeypad-item">
            <Button value="^" buttonValue={this.getButtonValue} />
          </div>
        </div>
        <div className="equationkeypad-col">
          <div className='equationkeypad-item-action'>
            <Button value="Solve" buttonValue={this.getButtonValue}/>
          </div>
          <div className='equationkeypad-item-action'>
            <Button value="Simplify" buttonValue={this.getButtonValue} />
          </div>
        </div>

      </div>
    )
  }
}
