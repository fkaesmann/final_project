import React, { Component } from "react";
import Aside from "./Aside.js";
import Nav from "./Nav.js";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionNumber: 0,
      questionCurrent: {}
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  async componentDidMount() {
    await this.getQuestions();
    console.log("Questions componentDidMount", this.state.questions[0]);
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
    console.log("Questions getQuestions", this.state.questions[0]);
  }

  async handleNext() {
    this.state.questionNumber++;
    this.state.questionCurrent = this.state.questions[
      this.state.questionNumber
    ];
    this.setState({
      questionCurrent: this.state.questions[this.state.questionNumber]
    });
    console.log("questionCurrent2 ", this.state.questionCurrent);
  }

  render() {
    return (
      <>
        <div>
          <Aside />
        </div>
        <div>
          Fred in Main
          {/* {this.state.questions.map(question => {
            return ( */}
          <div>
            <table key={this.state.questionCurrent.id}>
              <thead>
                <tr>
                  <th>{this.state.questionCurrent.question}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.questionCurrent.answer1}</td>
                </tr>
                <tr>
                  <td>{this.state.questionCurrent.answer2}</td>
                </tr>
                <tr>
                  <td>{this.state.questionCurrent.answer3}</td>
                </tr>
                <tr>
                  <td>{this.state.questionCurrent.answer4}</td>
                </tr>
                <tr>
                  <td>
                    Correct answer: {this.state.questionCurrent.correctAnswer}
                  </td>
                </tr>
                <tr>
                  <td>Details: {this.state.questionCurrent.details}</td>
                </tr>
              </tbody>
            </table>

            {/* {dater.ltl ? (
                  <h5> Loves to laugh and have a good time</h5>
                ) : (
                  <h5> Hates laughing, does not like having a good time</h5>
                )} */}

            <button
              type="button"
              className="btn btn-primary"
              size="sm"
              onClick={() =>
                this.handleNext(this.state.questionCurrent.question._id)
              }
            >
              Next
            </button>
          </div>
          {/* );
          })} */}
        </div>

        <Nav questions={this.state.questions} />
      </>
    );
  }
}

export default Main;
