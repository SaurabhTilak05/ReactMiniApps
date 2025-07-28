import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <div className="p-5 bg-primary text-white rounded shadow">
          <h1 className="mb-3">🎓 Welcome to Exam App</h1>
          <p className="lead">Prepare, Practice, and Test your knowledge!</p>

          <div className="mt-4">
            <Link to="/addQuestion" className="btn btn-light m-2">
              ➕ Add Question
            </Link>
            <Link to="/viewQuestion" className="btn btn-light m-2">
              📋 View Questions
            </Link>
            <Link to="/AttendExam" className="btn btn-success m-2">
              📝 Attend Exam
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
