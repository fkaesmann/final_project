import React, { Component } from "react";
import Aside from "./Aside.js";
import Nav from "./Nav.js";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// import { Text } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionNumber: 0,
      score: 0,
      questionCurrent: {},
      answerText: "",
      answerColor: "",
      clickedAnswer: false,
      nextButtonState: false
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.handlReset = this.handlReset.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();
    // console.log(
    //   "Questions componentDidMount count",
    //   this.state.questions.length
    // );
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
    //Check if it is the last question
    if (this.state.questionNumber === this.state.questions.length - 1) {
      this.state.questionNumber = 0;
      this.setState({
        answerText: "Test Complete!",
        answerColor: "info",
        nextButtonState: true
      });
      return;
    } else {
      this.state.questionNumber++;
    }

    this.state.questionCurrent = this.state.questions[
      this.state.questionNumber
    ];
    this.setState({
      clickedAnswer: false,
      questionCurrent: this.state.questions[this.state.questionNumber],
      answerText: "",
      answerColor: "",
      nextButtonState: ""
    });
  }

  alertClicked(num) {
    //Check to see if any answer has been clicked before
    if (!this.state.clickedAnswer) {
      if (num === this.state.questionCurrent.correctAnswer) {
        this.setState({
          score: this.state.score + 1
        });
      } else {
        if (this.state.score <= 0) {
          this.state.score = 1;
        }
        this.setState({
          score: this.state.score - 1
        });
      }
    }

    if (num === this.state.questionCurrent.correctAnswer) {
      this.setState({
        clickedAnswer: true,
        answerColor: "success",
        answerText: this.state.questionCurrent.details
      });
    } else {
      this.setState({
        clickedAnswer: true,
        answerColor: "danger",
        answerText: "Incorrect"
      });
    }
  }

  async handlReset() {
    console.log("Main handleReset");
  }

  render() {
    // const showEditForm = this.state.editButton ? (
    //   <UpdateBooz booz={this.state.selectedBrewery} getModel={this.getModel} />
    // ) : (
    //   <ShowBooz booz={this.state.boozToShow} booz2={this.state.boozComments} />
    // );
    return (
      <>
        <div>
          <Aside handlReset={this.handlReset} />
        </div>
        <div>
          <div>
            <h5 align="left">
              Instructions: Click on the best answer for the question
            </h5>

            <ListGroup align="left">
              <ListGroup.Item variant="primary">
                <strong>Question: </strong>
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
                  disabled={this.state.nextButtonState}
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

        <Nav
          score={this.state.score}
          numOfQuestions={this.state.questions.length}
          questionNumber={this.state.questionNumber}
        />
      </>
    );
  }
}

export default Main;
