import React, { Component } from 'react';
import './Navigation.css';
export default class Navigation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeModes: [true, false, false, false, false]
        };
        this.modes = ["Regular", "Scientific", 'Equation', 'Derivative', 'Integral'];

    }
    handleClick = (event) => {
        const text = event.target.innerText;
        this.props.menuOption(text);
        this.setState((prevState) => ({
            activeModes: prevState.activeModes.map(
                (item, index) => this.modes[index] === text)
        }));
    };
    getMenu = () => {
        const menu = this.modes.map((item, index) => {
            const isActive = this.state.activeModes[index] ? " mode-active" : "";
            return  <div key={index} className={item + "-mode" + isActive}>
                        <span onClick={(e) => this.handleClick(e)}>{item}</span>
                    </div>
        });
        return menu;
    };
  render() {
    return (
      <div className="navigation">
          {this.getMenu()}
      </div>
    )
  }
}
