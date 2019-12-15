import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//git subtree push --prefix=testtakerk_api heroku master

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault();

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
  }

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
              type="hidden"
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
            {this.props.buttonText} Question
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add;
