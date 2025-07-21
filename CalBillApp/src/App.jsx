import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      qty:0,
      rate:0,
      total:0
    }
  }

    render(){
      return <>
          <div className="container mt-5 p-5 bg-dark ">

            <div className="form-group">
              <input type="text" name="" id="" value={this.state.qty}  className="form-control" onChange={(e)=>this.setState({qty:e.target.value})}/>
            </div>

            <div className="form-group">
              <input type="text" name="" id="" value={this.state.rate}  className="form-control" onChange={(e)=>this.setState({rate:e.target.value})}/>
            </div>

            <div className="form-group">
              <input type="text" name="total" id="" value={`Total:  `+parseInt(this.state.qty)* parseInt(this.state.rate)} className="form-control" />

            </div>
          </div>
      </>
    }


}

export default App;