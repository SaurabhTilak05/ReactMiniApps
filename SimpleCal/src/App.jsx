import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      first:0,
      second:0,
      result:0
    }
  }
  render() {
    return <>
    <div className="container mt-5 p-5 bg-dark">
              <div className="form-group">
                    <input type="text" name="first" id="" value={this.state.first} placeholder="Enter Value" className="form-control"  onChange={(e)=>this.setState({first:e.target.value})} />
              </div>

              <div className="form-group">
                    <input type="text" name="second" id="" value={this.state.second} placeholder="Enter Value" className="form-control" onChange={(e)=>this.setState({second:e.target.value})}  />
              </div>
            
            <div className="form-group">
                <h1 className="text-white">Result is: {this.state.result}</h1>
            </div>
        <div className="btns">
             <div className="form-group">
                    <input type="button" name="add" id="" value="Addition" className="form-control control bg-secondary" onClick={(e)=>this.setState({result:parseInt(this.state.first)+parseInt(this.state.second)})} />
              </div>
              <div className="form-group" >
                    <input type="button" name="mul" id="" value="Multiplication"  className="form-control control bg-primary" onClick={(e)=>this.setState({result:parseInt(this.state.first)*parseInt(this.state.second)})} />
              </div>

              <div className="form-group">
                <input type="button" name="sub" id="" value="Substraction"  className="form-control control bg-danger " onClick={(e)=>this.setState({result:parseInt(this.state.first)-parseInt(this.state.second)})}  /> 
              </div>

              <div className="form-group">
                <input type="button" name="div" id="" value="Division"  className="form-control control bg-success" onClick={(e)=>this.setState({result:parseInt(this.state.first)/parseInt(this.state.second)})} />
              </div>

        </div>


    </div>
    </>
  }
}

export default App;


