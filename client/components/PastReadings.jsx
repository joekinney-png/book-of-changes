/* eslint-disable */

import React, { Component } from 'react';
import PastReading from './PastReading.jsx';
import '../stylesheets/styles.scss';

class PastReadings extends Component {
    constructor(props) {
      super(props);
      this.state = {
        readingLog: [],
      }
      this.viewPastReadings = this.viewPastReadings.bind(this);
    }
  
    viewPastReadings() {
      fetch("/api/view")
        .then((res) => res.json())
        .then((readingLog) => {
        if (!Array.isArray(readingLog)) readingLog = [];
          return this.setState({ readingLog });
      })
      .catch(err => console.log('PastReadings.viewPastReadings: get readings: ERROR: ', err));
    }
  
    render() {
      const logEntries = [];
  
      for (let i = 0; i < this.state.readingLog.length; i++) {
        logEntries.push(<PastReading
                           key={`Entries-${i}`}
                           id={this.state.readingLog[i]['_id']}
                           firstName={this.state.readingLog[i]['firstname']}
                           lastName={this.state.readingLog[i]['lastname']}
                           question={this.state.readingLog[i]['question']}
                          //  starred={this.state.readingLog[i]['starred']}
                           presenthexstr={this.state.readingLog[i]['presenthexstr']}
                           changinglinesstr={this.state.readingLog[i]['changinglines']}
                           futurehexstr={this.state.readingLog[i]['futurehexstr']}
                          //  notes={this.state.readingLog[i]['notes']}
                           viewPastReadings={this.viewPastReadings}
                        />);
      }
  
      return (
        <div>
           <h3>
            View past readings here:
          </h3>
          <div id="pastReadings">
            <button
              className="btn"
              onClick={this.viewPastReadings}
            >
            Click to open past readings
            </button>
          {logEntries}
          </div>
        </div>
      )
    }
  }

export default PastReadings;