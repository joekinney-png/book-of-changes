/* eslint-disable */

import React, { Component } from 'react';
import '../stylesheets/styles.scss';

class PastReading extends Component {
    render() {
      return (
        <div className="pastReading">
          {this.props.id}
          {this.props.firstName}
          {this.props.lastName}
          {this.props.question}
          {this.props.starred}
          {this.props.toss}
          {this.props.notes}
          <span>
              <button type="button" className="btnUpdate" >Update notes</button>
              <button type="button" className="btnDelete" >Delete reading</button>
          </span>
        </div>
      )
    }
  }

export default PastReading;

// onClick={updateNotes}
// onClick={deleteReading}