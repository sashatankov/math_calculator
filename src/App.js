import React, {Component} from 'react';
import './App.css';
import Navigation from "./navigation/Navigation";
import RegularCalculator from "./RegularCalculator/RegularCalculator";
import ScientificCalculator from "./ScientificCalculator/ScientificCalculator";
import EquationCalculator from "./EquationCalculator/EquationCalculator";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
export default class App extends Component{

    screens = {
        REGULAR: "Regular",
        SCIENTIFIC: "Scientific",
        EQUATION: "Equation",
        DERIVATIVE: "Derivative",
        INTEGRAL: "Integral"
    };
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: <RegularCalculator />
        }
    }
    handleNavigationClick = (option) => {
        switch (option) {
            case this.screens.REGULAR:
                this.setState((prevState) => ({currentScreen: <RegularCalculator />}));
                break;

            case this.screens.SCIENTIFIC:
                this.setState((prevState) => ({currentScreen: <ScientificCalculator />}));
                break;

            case this.screens.EQUATION:
                this.setState((prevState) => ({currentScreen: <EquationCalculator />}));
                break;

            case this.screens.DERIVATIVE:
            case this.screens.INTEGRAL:
                this.setState((prevState) => ({currentScreen: ""}));
                break;
        }
    };
    render() {
        return (
            <div className="App">
                <Navigation menuOption={this.handleNavigationClick}/>
                <div className="screen">
                    <ReactCSSTransitionGroup
                        transitionName="screenfade"
                        transitionAppear={true}
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    {this.state.currentScreen}
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        );
    }
}
