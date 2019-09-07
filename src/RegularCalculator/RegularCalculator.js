import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './RegularCalculator.css';
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
export default class RegularCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expr: "",
            lastCharEntered: '',
            panelText: ""

        };
        this.getButtonValue = this.getButtonValue.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.url = "http://127.0.0.1:5000/evaluate";
        this.aboutController = new AbortController();
        this.keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "(", ")", "\u221A", "."];

    }

    componentDidMount() {
        console.log("component did mount " + this.state.lastCharEntered);
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', (e) => this.handleKeyPress(e));
        this.aboutController.abort();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.state.lastCharEntered === "=" ||
           this.state.lastCharEntered === "Enter"){

            const expression = prevState.expr;
            console.log("expresion " + expression)
            console.log(JSON.stringify(expression));
            fetch(this.url,
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
            if(curBtn === "\u221A") {
                if(isPanel) {
                    return curExpr + "\u221A" + "(" // the sqrt sign
                }
                return curExpr + "sqrt(";

            }
            return curExpr + curBtn;
        }
        else {
            return "";
        }
    }

    getButtonValue(value) {
       this.setState(prevState => ({
           expr: this.getCurrentExpression(prevState.expr, value, false),
           lastCharEntered: value,
           panelText: this.getCurrentExpression(prevState.panelText, value, true)
       }));
    }

    handleKeyPress(event) {
        const key = event.key;
        this.setState((prevState) => ({
            expr: this.getCurrentExpression(prevState.expr, key, false),
            lastCharEntered: key,
            panelText: this.getCurrentExpression(prevState.panelText, key, true)
        }));
    }
  render() {
    return (
      <div className="regularcalculator">
          <ReactCSSTransitionGroup
          transitionName="keypad"
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        <Panel text={this.state.panelText}/>
        <Keypad button={this.getButtonValue}/>
          </ReactCSSTransitionGroup>
      </div>
    )
  }
}
