import React, { Component } from 'react';
import './Navigation.css';
export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className='regular-mode'>
          <button>Regular</button>
        </div>
        <div className='scientific-mode'>
          <button>Scientific</button>
        </div>
        <div className='equation-mode'>
          <button>Equation</button>
        </div>
        <div className='derivative-mode'>
          <button>Derivative</button>
        </div>
        <div className='integral-mode'>
          <button>Integral</button>
        </div>
      </div>
    )
  }
}
