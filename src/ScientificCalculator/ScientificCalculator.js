import React from 'react';
import RegularCalculator from "../RegularCalculator/RegularCalculator";
import './ScientificCalculator.css';
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
import ScientificKeypad from "../ScientificKeypad/ScientificKeypad";
import LogScreen from "../LogScreen/LogScreen";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class ScientificCalculator extends RegularCalculator {

    constructor(props) {
        super(props);
        this.isPowOn = false;
        this.powExpr = "";
        this.keys = ["1", "2", "3", "4", "5", "6", "7", "8",
            "9", "0", "+", "-", "*", "/", "(", ")", "^", "!", "pi", "e", "\u213C"];
        this.funcs = ["sin", "cos", "tan", "log", "exp", "sqrt", ".", "\u221A"];
    }


    getCurrentExpression(curExpr, curBtn, isPanel) {

        if(curBtn === "C" || curBtn === "c") {
            return "";
        }
        else if(curBtn === "Enter") {
            return "";
        }
        else if(curBtn === 'Backspace'){
            return curExpr.slice(0, -1);
        }
        else if(this.keys.includes(curBtn)){
            if(curBtn === "\u213C"){
                if(isPanel){
                    return curExpr + "\u213C"
                }
                return curExpr + "pi"
            }
            return curExpr + curBtn;
        }
        else if(this.funcs.includes(curBtn)) {
            if(curBtn === "sqrt") {
                if(isPanel){
                    return curExpr + "\u221A" + "("
                }
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
          <div className="scientificcalculator-keypad-wrapper">
              <Panel text={this.state.panelText}/>
              <div className="scientificcalculator-keypad">
                  <Keypad button={this.getButtonValue} />
                  <ScientificKeypad button ={this.getButtonValue} />
              </div>
          </div>

          <div className="scientificcalculator-logScreen">
            <LogScreen records={this.state.records} />
          </div>

        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
