import React from "react";

import './stylesheets/styles.scss';

class Book extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <>
        <h3>
          Welcome, {userName}
        </h3>
      </>
    );
  }
}

export default Book;
