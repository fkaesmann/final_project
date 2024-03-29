import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Form from './Form.js'

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    };
    this.handleReset1 = this.handleReset1.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleReset1(num) {
    try {
      // console.log("handleReset num =>", num);
      this.props.handlReset();
    } catch (err) {
      console.log("Update Submit Error: ", err);
    }
  }

  async handleAdd(num) {
    try {
      this.props.handleAdd();
    } catch (err) {
      console.log("handleAdd: ", err);
    }
  }
  async handleChange(num) {
    try {
      this.props.handleChange();
    } catch (err) {
      console.log("handleChange: ", err);
    }
  }
  async handleDelete(num) {
    try {
      this.props.handleDelete();
    } catch (err) {
      console.log("handleDelete: ", err);
    }
  }

  // const { x } = props;
  render() {
    return (
      <div>
        <div id="aside" className="   rounded-top">
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
          <Button
            variant="secondary"
            size="md"
            block
            onClick={() => this.handleChange(0)}
          >
            Change Test Question
          </Button>

          <Button
            variant="secondary"
            size="md"
            block
            onClick={() => this.handleDelete(0)}
          >
            Delete Test Question
          </Button>
        </div>
      </div>
    );
  }
}

export default Aside;
