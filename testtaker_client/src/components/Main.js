import React, { Component } from "react";
import Aside from "./Aside.js";
import Nav from "./Nav.js";
import Questions from "./Questions";
import Add from "./Add";
import axios from "axios";

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
      databaseAction: "",
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
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();

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
      buttonAction: "",
      questionNumber: 0
    });
  }

  async handleNext() {
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
    switch (this.state.databaseAction) {
      case "Add":
        await axios.post("/testtaker", formInputs);
        break;
      case "Change":
        await axios.put(`/testtaker/${formInputs.id}`, formInputs);
        break;
      case "Delete":
        await axios.delete(`/testtaker/${formInputs.id}`);
        break;
      default:
      // code block
    }

    await this.getQuestions();

    this.setState({
      questionCurrent: this.state.questions[0],
      questionNumber: 0,
      addButton: false
    });
  }

  async handlReset() {
    await this.getQuestions();

    this.setState({
      questionNumber: 0,
      addButton: false,
      questionCurrent: this.state.questions[0]
    });
  }
  async handleAdd() {
    this.setState({
      addButton: true,

      databaseAction: "Add",
      questionUpdate: {}
    });
  }

  async handleChange() {
    this.setState({
      addButton: true,
      databaseAction: "Change",
      questionUpdate: this.state.questionCurrent
    });
  }
  async handleDelete() {
    this.setState({
      addButton: true,
      databaseAction: "Delete",
      questionUpdate: this.state.questionCurrent
    });
  }

  render() {
    const showAddForm = this.state.addButton ? (
      <Add
        handleSubmit={this.handleSubmit}
        questionUpdate={this.state.questionUpdate}
        buttonText={this.state.databaseAction}
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
            handleDelete={this.handleDelete}
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
