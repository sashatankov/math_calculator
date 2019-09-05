import React from 'react';
import RegularCalculator from "../RegularCalculator/RegularCalculator";
import './ScientificCalculator.css';
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
import ScientificKeypad from "../ScientificKeypad/ScientificKeypad";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class ScientificCalculator extends RegularCalculator {


    getCurrentExpression(curExpr, curBtn, isPanel) {
        console.log("cur button " + curBtn);
        const keys = ["1", "2", "3", "4", "5", "6", "7", "8",
            "9", "0", "+", "-", "*", "/", "(", ")", "^", "!", "pi", "e"];
        const funcs = ["sin", "cos", "tan", "log", "exp", "sqrt", "."];
        if(curBtn === "C" || curBtn === "c") {
            return "";
        }
        else if(curBtn === "Enter") {
            return "";
        }
        else if(curBtn === 'Backspace'){
            return curExpr.slice(0, -1);
        }
        else if(keys.includes(curBtn)){
            if(curBtn === "pi"){
                return curExpr + "pi"
            }
            return curExpr + curBtn;
        }
        else if(funcs.includes(curBtn)) {
            if(curBtn === "sqrt") {
                return curExpr + "sqrt(";
            }
            return curExpr + curBtn + "(";
        }
        else {
            return "";
        }
    }
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
            <ScientificKeypad button ={this.getButtonValue} />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
