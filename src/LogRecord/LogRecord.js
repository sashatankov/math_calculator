import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './LogRecord.css';
export default class LogRecord extends Component {
  render() {
    return (
      <div className="logrecord">
          <ReactCSSTransitionGroup
              transitionName="log"
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={true}
              transitionAppearTimeout={200}
              transitionEnterTimeout={200}
              transitionLeaveTimeout={100}>
            <div className="logrecord-question">
              {this.props.question}=
            </div>
            <div className="logrecord-answer">
              {this.props.answer}
            </div>
          </ReactCSSTransitionGroup>

      </div>
    )
  }
}
