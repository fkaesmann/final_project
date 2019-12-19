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
      tScore: 0,
      percentScore: 0,
      questionCurrent: {},
      questionUpdate: {},
      answerText: "",
      addButton: false,
      databaseAction: "",
      answerColor: "",
      loading: "Initilizing",
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
    this.updateScore = this.updateScore.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();

    this.setState({
      questionCurrent: this.state.questions[0],
      // loading: "Initilizing",
      addButton: false
    });
  }

  async getQuestions() {
    // const response = await axios("/testtaker");
    const response = await axios(
      "http://ftk-testtaker.herokuapp.com/testtaker"
    );
    const data = response.data;
    this.setState({
      questions: data,
      buttonAction: "",
      loading: "",
      questionNumber: 0
    });
  }

  async handleNext() {
    this.state.questionNumber++;

    this.state.questionCurrent = this.state.questions[
      this.state.questionNumber
    ];

    if (this.state.questionNumber + 1 >= this.state.questions.length) {
      this.setState({
        nextButtonState: true
      });
    }
    this.setState({
      clickedAnswer: false,
      questionCurrent: this.state.questions[this.state.questionNumber],
      answerText: "",
      answerColor: ""
    });
  }

  async handleSubmit(event, formInputs) {
    switch (this.state.databaseAction) {
      case "Add":
        // await axios.post("/testtaker", formInputs);
        await axios.post(
          "http://ftk-testtaker.herokuapp.com/testtaker",
          formInputs
        );
        break;
      case "Change":
        await axios.put(
          `http://ftk-testtaker.herokuapp.com/testtaker/${formInputs.id}`,
          formInputs
        );
        break;
      case "Delete":
        await axios.delete(
          `http://ftk-testtaker.herokuapp.com/testtaker/${formInputs.id}`
        );
        break;
      default:
      // code block
    }

    await this.getQuestions();
    this.setState({
      questionCurrent: this.state.questions[0],
      questionNumber: 0,
      addButton: false,
      nextButtonState: false,
      percentScore: 0,
      score: 0
    });
  }

  async handlReset() {
    await this.getQuestions();
    this.setState({
      questionNumber: 0,
      score: 0,
      addButton: false,
      nextButtonState: false,
      percentScore: 0,
      questionCurrent: this.state.questions[0],
      answerText: "clear"
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

  //Increment or decrement score from Questions.js
  updateScore(value) {
    this.setState({
      score: this.state.score + value
    });

    if (value) {
      this.state.tScore++;
      let T = (this.state.tScore / this.state.questions.length) * 100;
      T = T.toFixed(1);
      this.setState({
        percentScore: T
      });
    }
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
        loading={this.state.loading}
        nextButtonState={this.state.nextButtonState}
        answerText={this.state.answerText}
        alertClicked={this.alertClicked}
        handleNext={this.handleNext}
        updateScore={this.updateScore}
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
          percentScore={this.state.percentScore}
          numOfQuestions={this.state.questions.length}
          questionNumber={this.state.questionNumber}
        />
      </>
    );
  }
}

export default Main;
