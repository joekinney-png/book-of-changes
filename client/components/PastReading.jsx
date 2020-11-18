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
    })
    .catch(err => console.log(err));
  }

    render() {
      return (
      <div>
        <div className="pastReading">
          <p className="identification">
            <span>Reading #{this.props.id} -- {this.props.firstName} {this.props.lastName}</span>
          </p>
          <div className="readingDetails">
            <p className="question">
            <span>{this.props.question}</span>
            </p>
            <div className="result">
              <span>Present Hexagram: {this.props.presenthexdef} {this.props.presenthex} {this.props.presenthexdescrip}</span>
              <span></span>
              <span>Changing Lines: {this.props.changinglinesstr}</span>
              <span></span>
              <span>Future Hexagram: {this.props.futurehexdef} {this.props.futurehex} {this.props.futurehexdescrip}</span>
            </div>
          </div>
          <p className="thoughts">
            <form id="notesForm" method="PUT" action='/api/put'>
             <div>Notes: {this.props.thoughts}</div>
             <br/>
             <input name={this.props.id} type="string" placeholder="Enter notes here" style={{ width: "500px" }}></input>
             <input type='submit' value="Submit"></input>
            </form>
          </p>
        </div>
        <div className="updateDelete">
            <button type="button" className="btnDelete" onClick={this.deleteReading}>Delete reading</button>
        </div>
      </div>
      )
    }
  }

export default PastReading;