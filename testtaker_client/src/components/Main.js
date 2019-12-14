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
      questionUpdate: {},
      answerText: "",
      addButton: false,
      addToDB: false,
      answerColor: "",
      clickedAnswer: false,
      nextButtonState: false
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.handlReset = this.handlReset.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  async handleSubmit(event, formInputs) {
    console.log("main.js handleSubmit this.state.addToDB ", this.state.addToDB);
    console.log("main.js handleSubmit formInputs ", formInputs);

    if (this.state.addToDB) {
      await axios.post("/testtaker", formInputs);
    } else {
      await axios.put(`/testtaker/${formInputs.id}`, formInputs);
    }

    await this.getQuestions();

    this.setState({
      questionCurrent: this.state.questions[0],
      questionNumber: 0,
      addButton: false
    });
  }

  // async handleDelete(deletedNotice) {
  //   await axios.delete(`/notices/${deletedNotice.id}`);
  //   this.getNotices();
  // }
  // async handleUpdate(event, formInputs) {
  //   event.preventDefault();
  //   await axios.put(`/notices/${formInputs.id}`, formInputs);
  //   this.getNotices();
  // }

  async handlReset() {
    await this.getQuestions();
    console.log("Main handleReset", this.state.questions[0]);
    this.setState({
      questionNumber: 0,
      addButton: false,
      questionCurrent: this.state.questions[0]
    });
  }
  async handleAdd() {
    console.log("Main handleAdd");

    this.setState({
      addButton: true,
      addToDB: true
    });
  }
  async handleChange() {
    console.log(
      "Main handleChange this.state.questionCurrent",
      this.state.questionCurrent
    );

    this.setState({
      addButton: true,
      addToDB: false,
      questionUpdate: this.state.questionCurrent
    });
  }

  render() {
    const showAddForm = this.state.addButton ? (
      <Add
        handleSubmit={this.handleSubmit}
        questionUpdate={this.state.questionUpdate}
      />
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
          <Aside
            handlReset={this.handlReset}
            handleAdd={this.handleAdd}
            handleChange={this.handleChange}
          />
        </div>

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
