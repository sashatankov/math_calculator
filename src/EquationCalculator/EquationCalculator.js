import React, { Component } from 'react';
import RegularCalculator from "../RegularCalculator/RegularCalculator";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "../panel/Panel";
import EquationKeypad from "../EquationKeypad/EquationKeypad";
import "./EquationCalculator.css"
export default class EquationCalculator extends RegularCalculator {

  constructor(props) {
    super(props);
    this.url = "http://127.0.0.1:5000";
    this.routes = {solve: "/solve", simplify: "/simplify"}

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update " + this.state.lastCharEntered);
    const expression = prevState.panelText;
    console.log(JSON.stringify(expression));
    if(this.state.lastCharEntered === "Solve"){
      fetch(this.url + this.routes.solve,
          {
            signal: this.aboutController.signal,
            mode: "cors",
            method: "post",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({expression: expression})
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState(state => ({
              expr: data['result'].toString(),
              lastCharEntered: "",
              panelText: data['result'].toString()
            }));
          })
          .catch((error) => {console.log("request failed ", error);});
    }
    if(this.state.lastCharEntered === "Simplify"){
      fetch(this.url + this.routes.simplify,
          {
            signal: this.aboutController.signal,
            mode: "cors",
            method: "post",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({expression: expression})
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState(state => ({
              expr: data['result'].toString(),
              lastCharEntered: "",
              panelText: data['result'].toString()
            }));
          })
          .catch((error) => {console.log("request failed ", error);});
    }

  }

  getCurrentExpression(curExpr, curBtn, isPanel) {
    console.log("cur button " + curBtn);
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "^", "x", "y", "z", ".", "="];
    if(curBtn === "C" || curBtn === "c") {
      return "";
    }
    else if(curBtn === 'Backspace'){
      return curExpr.slice(0, -1);
    }
    else if(keys.includes(curBtn)){
      return curExpr + curBtn;
    }
    else {
      return "";
    }
  }

  render() {
    return (
      <div className="equationcalculator">
        <ReactCSSTransitionGroup
            transitionName="eqkeypad"
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
          <Panel text={this.state.panelText}/>
          <EquationKeypad button={this.getButtonValue}/>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
