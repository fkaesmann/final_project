import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Form from './Form.js'

// function Aside(props) {
class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    };
    this.handleReset1 = this.handleReset1.bind(this);
  }

  async handleReset1(num) {
    try {
      //   // event.preventDefault();
      console.log("handleReset num =>", num);
      this.props.handlReset();
    } catch (err) {
      console.log("Update Submit Error: ", err);
    }
  }

  // const { x } = props;
  render() {
    return (
      <div>
        Aside
        <div>
          <Button
            variant="primary"
            size="md"
            block
            onClick={() => this.handleReset1(0)}
          >
            Reset test
          </Button>
          <Button variant="secondary" size="md" block>
            Add Test Question
          </Button>
          <Button variant="secondary" size="md" block>
            Change Test Question
          </Button>
          <Button variant="secondary" size="md" block>
            Delete Test Question
          </Button>
        </div>
      </div>
    );
  }
}

export default Aside;
