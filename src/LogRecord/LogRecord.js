import React, { Component } from 'react';
import './LogRecord.css';
export default class LogRecord extends Component {
  render() {
    return (
      <div className="logrecord">
        <div className="logrecord-question">
          {this.props.question}
        </div>
        <div className="logrecord-answer">
          {this.props.answer}
        </div>

      </div>
    )
  }
}
