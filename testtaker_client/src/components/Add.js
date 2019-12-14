import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Form from './Form.js'

//git subtree push --prefix=testtakerk_api heroku master

// function Aside(props) {
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log("question => ", event.target.formQuestion.value);
    // console.log("Answer 1 => ", event.target.formAnswer1.value);
    // console.log("Answer 2 => ", event.target.formAnswer2.value);
    // console.log("Answer 3 => ", event.target.formAnswer3.value);
    // console.log("Answer 4 => ", event.target.formAnswer4.value);
    // console.log("Correct => ", event.target.formCorrectNumber.value);
    // console.log("Details => ", event.target.formDetails.value);
    // if (this.props.notice) {
    this.props.handleSubmit(event, {
      question: event.target.formQuestion.value,
      answer1: event.target.formAnswer1.value,
      answer2: event.target.formAnswer2.value,
      answer3: event.target.formAnswer3.value,
      answer4: event.target.formAnswer4.value,
      correctAnswer: event.target.formCorrectNumber.value,
      details: event.target.formDetails.value,
      id: event.target.formId.value
    });
    //   this.props.toggleForm();
    // } else {
    //   this.props.handleSubmit(event, {
    //     title: this.state.title,
    //     author: this.state.author,
    //     phone: this.state.phone
    //   });
    // }

    // // clear out form
    // this.setState({
    //   formInputs: {
    //     author: "",
    //     title: "",
    //     phone: ""
    //   }
    // });
  }

  // const { x } = props;
  render() {
    return (
      <div>
        <h1> </h1>
        <h3 align="left">Enter the question details</h3>

        <Form align="left" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formQuestion">
            <Form.Control
              type="text"
              placeholder="Question"
              defaultValue={this.props.questionUpdate.question}
            />
          </Form.Group>

          <Form.Group controlId="formAnswer1">
            <Form.Control
              type="text"
              placeholder="Answer 1"
              defaultValue={this.props.questionUpdate.answer1}
            />
          </Form.Group>

          <Form.Group controlId="formAnswer2">
            <Form.Control
              type="text"
              placeholder="Answer 2"
              defaultValue={this.props.questionUpdate.answer2}
            />
          </Form.Group>

          <Form.Group controlId="formAnswer3">
            <Form.Control
              type="text"
              placeholder="Answer 3"
              defaultValue={this.props.questionUpdate.answer3}
            />
          </Form.Group>

          <Form.Group controlId="formAnswer4">
            <Form.Control
              type="text"
              placeholder="Answer 4"
              defaultValue={this.props.questionUpdate.answer4}
            />
          </Form.Group>

          <Form.Group controlId="formCorrectNumber">
            <Form.Control
              type="number"
              placeholder="Correct (1 - 4)"
              defaultValue={this.props.questionUpdate.correctAnswer}
            />
          </Form.Group>
          <Form.Group controlId="formId">
            <Form.Control
              type="text"
              defaultValue={this.props.questionUpdate._id}
            />
          </Form.Group>

          <Form.Group controlId="formDetails">
            <Form.Control
              type="text"
              placeholder="Answer Details"
              defaultValue={this.props.questionUpdate.details}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add;

/*
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button> */
