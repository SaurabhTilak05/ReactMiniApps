import React from "react";
import ReactDom from "react-dom";

class AddQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            opone: "",
            optwo: "",
            opthree: "",
            opfour: "",
            currect: ""
        };
    }

  saveQuestion = () => {
  this.props.getQuestion(this.state);

 
  this.setState({
    name: "",
    opone: "",
    optwo: "",
    opthree: "",
    opfour: "",
    currect: ""
  });
};


    render() {
        return (
            <>
                <div className="container bg-dark text-white mt-5 p-5">

                    <div className="form-group">
                        <input type="text" name="name" className="form-control" value={this.state.name}  onChange={(e) => this.setState({ name:e.target.value})  } placeholder="Enter Question"  />
                    </div>


                 <div className="form-group mt-1 p-1">
                        <input type="text" name="opone" className="form-control" value={this.state.opone}  onChange={(e) => this.setState({ opone:e.target.value})  } placeholder="Option 1"  />
                    </div>


                    <div className="form-group mt-1 p-1">
                        <input type="text" name="optwo" className="form-control" value={this.state.optwo}  onChange={(e) => this.setState({ optwo:e.target.value})  } placeholder="Option 2"  />
                    </div>

                    <div className="form-group mt-1 p-1">
                        <input type="text" name="opthree" className="form-control" value={this.state.opthree}  onChange={(e) => this.setState({ opthree:e.target.value})  } placeholder="Option 3"  />
                    </div>

                     <div className="form-group mt-1 p-1">
                        <input type="text" name="opfour" className="form-control" value={this.state.opfour}  onChange={(e) => this.setState({ opfour:e.target.value})  } placeholder="Option 4"  />
                    </div>

                    <div className="form-group mt-1 p-1">
                        <select name="currect" className="form-control" value={this.state.currect} onChange={(e) => this.setState({ currect: e.target.value })}
>
                       <option value="">Choose Correct Option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                       </select>
                    </div>

                   <div className="form-group mt-1 p-1">
            <input type="button" id="btn" className="form-control text-dark" onClick={this.saveQuestion} value="Add Question" />
          </div>
                </div>
            </>
        );
    }
}

export default AddQuestion;
