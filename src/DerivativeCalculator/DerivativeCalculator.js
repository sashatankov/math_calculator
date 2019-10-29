import React, { Component } from 'react';
import "./DerivativeCalculator.css";
import RegularCalculator from "../RegularCalculator/RegularCalculator";
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
import DerivativeKeypad from "../DerivativeKeypad/DerivativeKeypad";
import LogScreen from "../LogScreen/LogScreen";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ScientificCalculator from "../ScientificCalculator/ScientificCalculator";
export default class DerivativeCalculator extends ScientificCalculator {

  constructor(props) {
    super(props);
    this.url = "http://127.0.0.1:5000/derivative";
    this.keys = ["1", "2", "3", "4", "5", "6", "7", "8",
      "9", "0", "+", "-", "*", "/", "(", ")", "^", "x", "pi", "e", "\u213C"];
  }


  render() {
    return (
      <div className="derivativecalculator">
        <ReactCSSTransitionGroup
            transitionName="derkeypad"
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
          <div className="derivativecalculator-keypad-wrapper">
            <Panel text={this.state.panelText}/>
            <div className="derivativecalculator-keypad">
              <Keypad button={this.getButtonValue} />
              <DerivativeKeypad button ={this.getButtonValue} />
            </div>
          </div>

          <div className={"scientific" + this.state.historyClass}>
            <LogScreen records={this.state.records} hideHistory={this.hideHistory}/>
          </div>
          <div className="scientificcalculator-history-btn" onClick={(e) => this.showHistory(e)}>
            <i className="fas fa-history"> </i>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
