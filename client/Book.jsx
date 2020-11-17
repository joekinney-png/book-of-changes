import React from "react";
import ReactDOM from 'react-dom';
import './stylesheets/styles.scss';

class Book extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fetchedReadings: false,
      readingLog: [],
    }
    this.viewPastReadings = this.viewPastReadings.bind(this);
  }

  viewPastReadings() {
    fetch("/api/view")
      .then((res) => res.json())
      .then((readingLog) => {
      console.log(readingLog)
      if (!Array.isArray(readingLog)) readingLog = [];
        return this.setState({ readingLog, fetchedReadings: true, });
    })
    .catch(err => console.log('Book.viewPastReadings: get readings: ERROR: ', err));
  }

  render() {
    const logEntries = [];

    for (let i = 0; i < this.state.readingLog.length; i++) {
      console.log(this.state.readingLog[i]['_id'])
      logEntries.push(<LogEntries
                         key={`Entries-${i}`}
                         id={this.state.readingLog[i]['_id']}
                         firstName={this.state.readingLog[i]['firstname']}
                         lastName={this.state.readingLog[i]['lastname']}
                         question={this.state.readingLog[i]['question']}
                         starred={this.state.readingLog[i]['starred']}
                         toss={this.state.readingLog[i]['toss']}
                         notes={this.state.readingLog[i]['notes']}
                      />);
    }

    return (
      <div>
         <h3>
          Welcome, Winston LaMoine
        </h3>
        <div id="pastReadings">
          <button
            className="btn"
            onClick={this.viewPastReadings}
          >
          View Past Readings!
          </button>
        {logEntries}
        </div>
      </div>
    )
  }
}

class LogEntries extends React.Component {
  render() {
    return (
      <div className="reading">
        {this.props.id}
        {this.props.firstName}
        {this.props.lastName}
        {this.props.question}
        {this.props.starred}
        {this.props.toss}
        {this.props.notes}
      </div>
    )
  }
}

ReactDOM.render(
  <Book />,
  document.getElementById("content")
);
