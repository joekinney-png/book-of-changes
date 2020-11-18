/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PastReadings from './components/PastReadings.jsx';
import './stylesheets/styles.scss';

class Book extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div>
        <PastReadings/>
      </div>
    );
  }
}

ReactDOM.render(
  <Book/>,
  document.getElementById('content')
);
