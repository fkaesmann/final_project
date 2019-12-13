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

  async handleAdd(num) {
    try {
      //   // event.preventDefault();
      console.log("handleAdd num =>", num);
      this.props.handleAdd();
    } catch (err) {
      console.log("handleAdd: ", err);
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
            Reset Test
          </Button>
          <Button
            variant="secondary"
            size="md"
            block
            onClick={() => this.handleAdd(0)}
          >
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
