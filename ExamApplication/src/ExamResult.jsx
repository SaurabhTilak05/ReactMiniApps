import React from "react";

const ExamResult = ({ questions, answers, score }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="container mt-5">
      <h2>Result Summary</h2>
      <h4>Score: {score}/{questions.length}</h4>
      <h5>Percentage: {(score / questions.length * 100).toFixed(2)}%</h5>

      <table className="table table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th>Q.no</th>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, i) => {
            const correct = q.currect;
            const user = answers[i] || "Not Answered";
            const isCorrect = user === correct;
            return (
              <tr >
                <td>{i + 1}</td>
                <td>{q.name}</td>
                <td>{user}</td>
                <td>{correct}</td>
                <td className={isCorrect ? "text-success" : "text-danger"}>
                  {isCorrect ? "Correct" : "Wrong"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExamResult;
