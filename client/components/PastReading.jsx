/* eslint-disable */

import React, { Component } from 'react';
import '../stylesheets/styles.scss';

class PastReading extends Component {
  constructor(props) {
    super(props);
    this.deleteReading = this.deleteReading.bind(this);
  }

  deleteReading() {
    const id = this.props.id
    fetch(`/api/delete?id=${id}`)
    .then(resp => resp.json())
    .then(data => {
      this.props.viewPastReadings();
      console.log(data)
    })
    .catch(err => console.log(err));
  }

    render() {
      return (
      <div>
        <div className="pastReading">
          <p className="identification">
            <span>Reading #: {this.props.id}</span>
            <span>Reading Date: [to come]</span>
            <span>{this.props.firstName} {this.props.lastName}</span>
            <span>Starred?: [to come]</span>
          </p>
          <p className="question">
            <span>Question posed: {this.props.question}</span>
          </p>
          <div className="readingDetails">
            <span>Present Hexagram: {this.props.toss}</span>
            <br/>
            <span>Future Hexagram: [to come]</span>
          </div>
          <p className="thoughts">
            <span>Notes: [to come]</span>
          </p>
        </div>
        <div className="updateDelete">
            <button type="button" className="btnUpdate" >Update notes</button>
             <button type="button" className="btnDelete" onClick={this.deleteReading}>Delete reading</button>
        </div>
      </div>
      )
    }
  }

export default PastReading;

// onClick={updateNotes}