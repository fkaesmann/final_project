import React, { Component } from "react";
import Aside from "./Aside.js";
import Nav from "./Nav.js";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionNumber: 0,
      score: 0,
      questionCurrent: {},
      answerText: "",
      answerColor: ""
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();
    // console.log("Questions componentDidMount", this.state.questions[0]);
    this.setState({
      questionCurrent: this.state.questions[0]
    });
  }

  async getQuestions() {
    const response = await axios("/testtaker");
    const data = response.data;
    this.setState({
      questions: data
    });
    // console.log("Questions getQuestions", this.state.questions[0]);
  }

  async handleNext() {
    this.state.questionNumber++;
    this.state.questionCurrent = this.state.questions[
      this.state.questionNumber
    ];
    this.setState({
      questionCurrent: this.state.questions[this.state.questionNumber],
      answerText: "",
      answerColor: ""
    });
  }

  alertClicked(num) {
    if (num === this.state.questionCurrent.correctAnswer) {
      this.setState({
        answerColor: "success",
        answerText: this.state.questionCurrent.details,
        score: this.state.score + 1
      });
    } else {
      if (this.state.score <= 0) {
        this.state.score = 1;
      }
      this.setState({
        answerColor: "danger",
        answerText: "Incorrect",
        score: this.state.score - 1
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <Aside />
        </div>
        <div>
          <div>
            <h4 align="left">
              Instructions: Select the best answer for the question
            </h4>

            <ListGroup align="left">
              <ListGroup.Item variant="primary">
                <bold>Question: </bold>
                {this.state.questionCurrent.question}
              </ListGroup.Item>
              <ListGroup.Item
                variant="Secondary"
                onClick={() => this.alertClicked(1)}
              >
                {this.state.questionCurrent.answer1}
              </ListGroup.Item>
              <ListGroup.Item
                variant="Dark"
                onClick={() => this.alertClicked(2)}
              >
                {this.state.questionCurrent.answer2}
              </ListGroup.Item>
              <ListGroup.Item
                variant="Secondary"
                onClick={() => this.alertClicked(3)}
              >
                {this.state.questionCurrent.answer3}
              </ListGroup.Item>
              <ListGroup.Item
                variant="Dark"
                onClick={() => this.alertClicked(4)}
              >
                {this.state.questionCurrent.answer4}
              </ListGroup.Item>
              <ListGroup.Item variant={this.state.answerColor}>
                {this.state.answerText}
              </ListGroup.Item>
              <ListGroup.Item align="right" variant="">
                <Button
                  type="button"
                  className="btn btn-primary"
                  size="sm"
                  onClick={() =>
                    this.handleNext(this.state.questionCurrent.question._id)
                  }
                >
                  Next
                </Button>
              </ListGroup.Item>
            </ListGroup>

            {/* {dater.ltl ? (
                  <h5> Loves to laugh and have a good time</h5>
                ) : (
                  <h5> Hates laughing, does not like having a good time</h5>
                )} */}
          </div>
        </div>

        <Nav score={this.state.score} />
      </>
    );
  }
}

export default Main;
