import React, { Component } from 'react';
import './Keypad.css'
import Button from "../Button/Button";
export default class Keypad extends Component {

    constructor(props) {
        super(props);
        this.getButtonValue = this.getButtonValue.bind(this);
    }
    getButtonValue(value) {
        this.props.button(value);
    }
  render() {
    return (
      <div className="keypad">
        <div className="keypad-row">
          <div className='keypad-item'>
            <Button value='1' buttonValue={this.getButtonValue}/>
          </div>
            <div className='keypad-item'>
                <Button value='2' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='3' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='+' buttonValue={this.getButtonValue}/>
            </div>
        </div>
        <div className="keypad-row">
            <div className='keypad-item'>
                <Button value='4' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='5' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='6' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='-' buttonValue={this.getButtonValue}/>
            </div>
        </div>
        <div className="keypad-row">
            <div className='keypad-item'>
                <Button value='7' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='8' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='9' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='*' buttonValue={this.getButtonValue}/>
            </div>
        </div>
        <div className="keypad-row">
            <div className='keypad-item'>
                <Button value='C' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='0' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='=' buttonValue={this.getButtonValue}/>
            </div>
            <div className='keypad-item'>
                <Button value='/' buttonValue={this.getButtonValue}/>
            </div>
        </div>
      </div>
    )
  }
}
