import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <footer>
        <center>
          <h2>Footer</h2>
        </center>
      </footer>
    );
  }
}

export default Footer;
