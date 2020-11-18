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
        console.log(readingLog);
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
                           presenthexdef={this.state.readingLog[i]['presenthexdef']}
                           presenthex={this.state.readingLog[i]['presenthex']}
                           presenthexdescrip={this.state.readingLog[i]['presenthexdescrip']}
                           changinglinesstr={this.state.readingLog[i]['changinglines']}
                           futurehexdef={this.state.readingLog[i]['futurehexdef']}
                           futurehex={this.state.readingLog[i]['futurehex']}
                           futurehexdescrip={this.state.readingLog[i]['futurehexdescrip']}
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