import React, { Component } from 'react';
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

    }

    componentDidMount() {
        console.log("component did mount " + this.state.lastCharEntered);
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("component did update " + this.state.lastCharEntered);
        if(this.state.lastCharEntered === "=" ||
           this.state.lastCharEntered === "Enter"){

            const expression = prevState.panelText;
            console.log(JSON.stringify(expression));
            fetch(this.url,
                {
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

    getCurrentExpression(curExpr, curBtn) {
        console.log("cur button " + curBtn);
        const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"]
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
            return curExpr + curBtn;
        }
        else {
            return "";
        }
    }

    getButtonValue(value) {
       this.setState(prevState => ({
           expr: this.getCurrentExpression(prevState.expr, value),
           lastCharEntered: value,
           panelText: this.getCurrentExpression(prevState.expr, value)
       }));
    }

    handleKeyPress(event) {
        const key = event.key;
        console.log("key " + key);
        this.setState((prevState) => ({
            expr: this.getCurrentExpression(prevState.expr, key),
            lastCharEntered: key,
            panelText: this.getCurrentExpression(prevState.expr, key)
        }));


    }
  render() {
    return (
      <div className="regularcalculator">
        <Panel text={this.state.panelText}/>
        <Keypad button={this.getButtonValue}/>
      </div>
    )
  }
}
