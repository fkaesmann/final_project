import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    };
  }

  async componentDidMount() {}
  // async handlReset() {}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
