import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionNumber: 0,
      questionCurrent: {},
      answerText: "",
      answerColor: "",
      hovering: "",
      clickedAnswer: false
      // nextButtonState: false
    };
    this.alertClicked = this.alertClicked.bind(this);
    this.onToggleColor = this.onToggleColor.bind(this);
  }

  // async componentDidMount() {
  //   this.setState({
  //     clickedAnswer: false,
  //     answerText: ""
  //   });
  // }

  async handleNext(question_ID) {
    //handleNext in parent
    this.props.handleNext(question_ID);

    //clear out form
    this.setState({
      clickedAnswer: false,
      questionCurrent: this.state.questions[this.state.questionNumber],
      answerText: "",
      answerColor: ""
    });
  }

  onToggleColor(event) {
    if (this.state.hovering === "info") {
      this.setState({ hovering: "" });
    } else {
      this.setState({ hovering: "info" });
    }

    switch (event) {
      case 1:
        if (this.state.hovering1 === "info") {
          this.setState({ hovering1: "" });
        } else {
          this.setState({ hovering1: "info" });
        }
        break;
      case 2:
        if (this.state.hovering2 === "info") {
          this.setState({ hovering2: "" });
        } else {
          this.setState({ hovering2: "info" });
        }
        break;
      case 3:
        if (this.state.hovering3 === "info") {
          this.setState({ hovering3: "" });
        } else {
          this.setState({ hovering3: "info" });
        }
        break;
      case 4:
        if (this.state.hovering4 === "info") {
          this.setState({ hovering4: "" });
        } else {
          this.setState({ hovering4: "info" });
        }
        break;

      default:
      // code block
    }
  }

  alertClicked(num) {
    //Check to see if any answer has been clicked before

    if (!this.state.clickedAnswer) {
      if (num === this.props.questionCurrent.correctAnswer) {
        this.props.updateScore(1);
      } else {
        this.props.updateScore(0);
      }
    }

    if (num === this.props.questionCurrent.correctAnswer) {
      this.setState({
        clickedAnswer: true,
        answerColor: "success",
        answerText: this.props.questionCurrent.details
      });
    } else {
      this.setState({
        clickedAnswer: true,
        answerColor: "danger",
        answerText: "Incorrect"
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <div>
            <h2>{this.props.loading}</h2>
            <h5 align="left">
              Instructions: Click on the best answer for the question
            </h5>

            <ListGroup align="left">
              <ListGroup.Item variant="primary">
                <strong>Question: </strong>
                {this.props.questionCurrent.question}
              </ListGroup.Item>

              <ListGroup.Item
                variant={this.state.hovering1}
                onClick={() => this.alertClicked(1)}
                onMouseOver={() => this.onToggleColor(1)}
                onMouseOut={() => this.onToggleColor(1)}
              >
                {this.props.questionCurrent.answer1}
              </ListGroup.Item>

              <ListGroup.Item
                onClick={() => this.alertClicked(2)}
                variant={this.state.hovering2}
                onMouseOver={() => this.onToggleColor(2)}
                onMouseOut={() => this.onToggleColor(2)}
              >
                {this.props.questionCurrent.answer2}
              </ListGroup.Item>

              <ListGroup.Item
                variant={this.state.hovering3}
                onClick={() => this.alertClicked(3)}
                onMouseOver={() => this.onToggleColor(3)}
                onMouseOut={() => this.onToggleColor(3)}
              >
                {this.props.questionCurrent.answer3}
              </ListGroup.Item>

              <ListGroup.Item
                variant={this.state.hovering4}
                onClick={() => this.alertClicked(4)}
                onMouseOver={() => this.onToggleColor(4)}
                onMouseOut={() => this.onToggleColor(4)}
              >
                {this.props.questionCurrent.answer4}
              </ListGroup.Item>

              <ListGroup.Item variant={this.state.answerColor}>
                {this.state.answerText}
              </ListGroup.Item>

              <ListGroup.Item align="right" variant="">
                <Button
                  type="button"
                  className="btn btn-primary"
                  size="md"
                  disabled={this.props.nextButtonState}
                  onClick={() =>
                    this.handleNext(this.props.questionCurrent.question._id)
                  }
                >
                  Next
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </>
    );
  }
}

export default Questions;
