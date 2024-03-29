import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './RegularCalculator.css';
import Panel from "../panel/Panel";
import Keypad from "../keypad/Keypad";
import LogScreen from "../LogScreen/LogScreen";
export default class RegularCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expr: "",
            lastCharEntered: '',
            panelText: "",
            records: [],
            historyClass: "calculator-logscreen"
        };
        this.getButtonValue = this.getButtonValue.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.showHistory = this.showHistory.bind(this);
        this.hideHistory = this.hideHistory.bind(this);
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
                        panelText: data['result'].toString(),
                        records: [...this.state.records, {question: expression, answer: data['result']}]
                    }));
                    console.log("records");
                    console.log(this.state.records);
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
    showHistory(event) {
        this.setState((prevState) => ({
            historyClass: "calculator-logscreen calculator-logscreen-active"
        }));
    }
    hideHistory() {
        this.setState((prevState) => ({
            historyClass: "calculator-logscreen"
        }));
    }
  render() {
    return (
        <div className="regularcalculator-wrapper">
            <ReactCSSTransitionGroup
                transitionName="keypad"
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            <div className="regularcalculator">

                <Panel text={this.state.panelText}/>
                <Keypad button={this.getButtonValue}/>

            </div>
            <div className={"regular" + this.state.historyClass}>
                <LogScreen records={this.state.records} hideHistory={this.hideHistory}/>
            </div>
            <div className="regularcalculator-history-btn" onClick={(e) => this.showHistory(e)}>
                <i className="fas fa-history"> </i>
            </div>
            </ReactCSSTransitionGroup>
        </div>

    )
  }
}
