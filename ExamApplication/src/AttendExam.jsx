import React from "react";

class AttendExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      answers: {},
    };
  }

  changeOption = (e) => {
    this.setState((prev) => ({
      answers: {
        ...prev.answers,
        [prev.current]: e.target.value,
      },
    }));
  };

  next = () => {
    this.setState((prev) => ({
      current: prev.current + 1,
    }));
  };

  prev = () => {
    this.setState((prev) => ({
      current: prev.current - 1,
    }));
  };

  submitExam = () => {
    const { questions, onSubmit } = this.props;
    const { answers } = this.state;
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.currect) {
        score++;
      }
    });    
    onSubmit(answers, score);
  };

  render() {
    const { questions } = this.props;
    const { current, answers } = this.state;

    if (!questions || questions.length === 0) {
      return <div className="container mt-5">No questions available.</div>;
    }

    const q = questions[current];
    const selected = answers[current] || "";

    return (
      <div className="container mt-5 border p-4 rounded bg-light shadow-sm">
        <h4 className="mb-4">Q.{current + 1}: {q.name}</h4>

        {[1, 2, 3, 4].map((n, i) => {
          let key;
if (i === 0) key = "opone";
else if (i === 1) key = "optwo";
else if (i === 2) key = "opthree";
else if (i === 3) key = "opfour";

          return (
            <div className="form-check bg-white p-2 rounded my-2" key={n}>
              <input
                className="form-check-input"
                type="radio"
                name={`q_${current}`}
                value={n}
                checked={selected === String(n)}
                onChange={this.changeOption}
              />
              <label className="form-check-label">{q[key]}</label>
            </div>
          );
        })}

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary" onClick={this.prev} disabled={current === 0}>
            Prev
          </button>
          {current === questions.length - 1 ? (
            <button className="btn btn-success" onClick={this.submitExam}>
              Submit
            </button>
          ) : (
            <button className="btn btn-primary" onClick={this.next}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AttendExam;
