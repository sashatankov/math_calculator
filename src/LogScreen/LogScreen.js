import React, { Component } from 'react';
import './LogScreen.css'
import LogRecord from "../LogRecord/LogRecord";
export default class LogScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      records: this.props.records
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setState((state) =>({
      records: prevProps.records
    }));
  }

  addRecord(record) {
    this.setState((prevState) => ({
      records: prevState.records.append(record)
    }));
  }
  getRecords() {
    return this.state.records.map((record) => {
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
