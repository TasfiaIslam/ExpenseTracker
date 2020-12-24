import React from "react";
import "./App.css";

class connection extends React.Component {
  componentDidMount() {
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div className="App"></div>;
  }
}

export default connection;
