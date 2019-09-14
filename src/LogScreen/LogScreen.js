import React, { Component } from 'react';
import './LogScreen.css'
import LogRecord from "../LogRecord/LogRecord";
export default class LogScreen extends Component {

  constructor(props) {
    super(props);
  }

  getRecords() {
    return this.props.records.map((record) => {
      return <LogRecord question={record.question} answer={record.answer} />
    });
  }
  render() {
    return (
      <div className="logscreen">
        <div className="logscreen-label">
          History:
        </div>
        {this.getRecords()}
      </div>
    )
  }
}
