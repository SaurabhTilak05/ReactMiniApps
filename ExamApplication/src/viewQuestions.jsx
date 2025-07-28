import React from "react";

class ViewQuestion extends React.Component {
  render() {
    const { questions } = this.props;

    return (
      <div className="container mt-5">
        <h3 className="mb-4">All Questions</h3>

        {questions.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Sr.No</th>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Correct Option</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.opone}</td>
                  <td>{item.optwo}</td>
                  <td>{item.opthree}</td>
                  <td>{item.opfour}</td>
                  <td>{item.currect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ViewQuestion;
