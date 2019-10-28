import React, { Component } from 'react';
import './LogScreen.css'
import LogRecord from "../LogRecord/LogRecord";
export default class LogScreen extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getRecords() {
    return this.props.records.map((record) => {
      return <LogRecord question={record.question} answer={record.answer} />
    });
  }
  handleClick(event) {
    this.props.hideHistory();
  }
  render() {
    return (
      <div className="logscreen">
        <div className="logscreen-label">
          History:
        </div>
        <div className="logscreen-close" onClick={(e) => this.handleClick(e)}>
          <i className="fas fa-times"> </i>
        </div>
        {this.getRecords()}

      </div>
    )
  }
}
