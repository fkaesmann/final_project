import React, { Component } from "react";
import Aside from "./Aside.js";
import Nav from "./Nav.js";
import Questions from "./Questions";
import Add from "./Add";
import axios from "axios";
// import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";
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
      addButton: false,
      answerColor: "",
      clickedAnswer: false,
      nextButtonState: false
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.handlReset = this.handlReset.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();
    // console.log(
    //   "Questions componentDidMount count",
    //   this.state.questions.length
    // );
    this.setState({
      questionCurrent: this.state.questions[0],
      questionNumber: 0,
      addButton: false
    });
  }

  async getQuestions() {
    const response = await axios("/testtaker");
    const data = response.data;
    this.setState({
      questions: data,
      questionNumber: 0
    });
    // console.log("Questions getQuestions", this.state.questions);
  }

  async handleNext() {
    //Check if it is the last question
    // console.log("main.js handleNext", this.state.questionNumber);
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

  async handleSubmit(event, obj) {
    console.log("main.js handleSubmit ", obj);
    await axios.post("/testtaker", obj);
  }

  // alertClicked(num) {
  //Check to see if any answer has been clicked before
  // if (!this.state.clickedAnswer) {
  //   if (num === this.state.questionCurrent.correctAnswer) {
  //     this.setState({
  //       score: this.state.score + 1
  //     });
  //   } else {
  //     if (this.state.score <= 0) {
  //       this.state.score = 1;
  //     }
  //     this.setState({
  //       score: this.state.score - 1
  //     });
  //   }
  // }
  // if (num === this.state.questionCurrent.correctAnswer) {
  //   this.setState({
  //     clickedAnswer: true,
  //     answerColor: "success",
  //     answerText: this.state.questionCurrent.details
  //   });
  // } else {
  //   this.setState({
  //     clickedAnswer: true,
  //     answerColor: "danger",
  //     answerText: "Incorrect"
  //   });
  // }
  // }

  async handlReset() {
    await this.getQuestions();
    console.log("Main handleReset", this.state.questions[0]);
    this.setState({
      questionNumber: 0,
      questionCurrent: this.state.questions[0]
    });
  }
  async handleAdd() {
    console.log("Main handleAdd");

    this.setState({
      addButton: true
    });
  }

  render() {
    const showAddForm = this.state.addButton ? (
      <Add handleSubmit={this.handleSubmit} />
    ) : (
      <Questions
        questionCurrent={this.state.questionCurrent}
        score={this.state.score}
        alertClicked={this.alertClicked}
        handleNext={this.handleNext}
      />
    );
    return (
      <>
        <div>
          <Aside handlReset={this.handlReset} handleAdd={this.handleAdd} />
        </div>

        {/* <Questions
          questionCurrent={this.state.questionCurrent}
          score={this.state.score}
          alertClicked={this.alertClicked}
          handleNext={this.handleNext}
        /> */}

        {/* <Add handleSubmit={this.handleSubmit} /> */}
        {showAddForm}

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
