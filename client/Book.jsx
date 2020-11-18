/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PastReadings from './components/PastReadings.jsx';
import './stylesheets/styles.scss';
import img from './imgs/ichinghexagrams.png';

class Book extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div>
        <img src={img} className='iching'/>
        <PastReadings/>
      </div>
    );
  }
}

ReactDOM.render(
  <Book/>,
  document.getElementById('content')
);
