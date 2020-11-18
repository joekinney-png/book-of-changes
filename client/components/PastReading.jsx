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
                  <div><u>Present Hexagram:</u></div>
                  <div><u>Changing Lines:</u></div>
                  <div><u>Future Hexagram:</u></div>
            </div>
            <div className="result">
              <div className="hexDisplay">
                  <div>{this.props.presenthexdef}</div>
                  <div className="actualHex">{this.props.presenthex}</div>
                  <div>{this.props.presenthexdescrip}</div>
              </div>
              <div className="linesDisplay">
                  {this.props.changinglinesstr}
              </div>
              <div className="hexDisplay">
                  <div>{this.props.futurehexdef}</div>
                  <div className="actualHex">{this.props.futurehex}</div>
                  <div>{this.props.futurehexdescrip}</div>
              </div>
            </div>
          </div>
          <p className="thoughts">
            <form id="notesForm" method="PUT" action='/api/put'>
             <div>Thoughts: {this.props.thoughts}</div>
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