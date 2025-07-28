import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddQuestion from "./AddQuestion";
import AttendExam from "./AttendExam";
import ViewQuestion from "./viewQuestions";
import ExamResult from "./ExamResult";
import Home from "./HomePage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      userAnswers: {},
      score: 0,
      showResult: false,
    };
  }

  createQuestions = (question) => {
    this.setState({ questionBank: [...this.state.questionBank, question] });
  };

  handleExamSubmit = (answers, score) => {
    this.setState({
      userAnswers: answers,
      score,
      showResult: true,
    });
  };

  render() {
    const { questionBank, userAnswers, score, showResult } = this.state;

    return (
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-primary p-3 bg-primary">

          <NavLink className="nav-link text-white pr-5" to="/">Quiz App</NavLink>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/addQuestion">➕Add Question</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/viewQuestion">👀View Question</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/AttendExam">📝Attend Exam</NavLink>
              </li>
           
            </ul>
                 <form class="form-inline my-2  my-lg-0 m-auto ">
                <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                
    </form>
          </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
          <Route path="/addQuestion" element={<AddQuestion getQuestion={this.createQuestions} />} />
          <Route path="/viewQuestion" element={<ViewQuestion questions={questionBank} />} />
          <Route path="/AttendExam" element={ showResult ? (  <ExamResult questions={questionBank} answers={userAnswers} score={score} /> ) : (  <AttendExam questions={questionBank} onSubmit={this.handleExamSubmit} />    ) } />
          <Route path="/Result" element={<ExamResult questions={questionBank} answers={userAnswers} score={score} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
