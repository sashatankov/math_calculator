import React from 'react';
import RegularCalculator from "../RegularCalculator/RegularCalculator";
import './ScientificCalculator.css';
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
import ScientificKeypad from "../ScientificKeypad/ScientificKeypad";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class ScientificCalculator extends RegularCalculator {
  render() {
    return (
      <div className="scientificcalculator">
        <ReactCSSTransitionGroup
            transitionName="scikeypad"
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

          <Panel text={this.state.panelText}/>
          <div className="scientificcalculator-keypad">
            <Keypad button={this.getButtonValue} />
            <ScientificKeypad button={this.getButtonValue} />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
