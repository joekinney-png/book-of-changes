import React from "react";

class Book extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <>
        <h1>
          Welcome, {userName}
        </h1>
      </>
    );
  }
}

export default Book;
