import React from "react";
import ReactDom from "react-dom";
class App extends React.Component{
    constructor(){
        super();
        this.state={
          count:0,
        }
    }
    render(){
      return<>
            <div className="container ">
               <div className="from-group">
                   <h1>Count is: {this.state.count}</h1>
               </div>
              <div className="Butons">
                  <input type="button" name="btn" id="" value="Increment"  onClick={() => this.setState({ count: parseInt(this.state.count) + 1 })} />
                  <input type="button" name="dec" id=""   value="Decrement"   onClick={() => this.setState({ count: parseInt(this.state.count) - 1 })} />
                  <input type="button" name="zero" id=""  value="Reset"   onClick={() => this.setState({ count: 0 })} />
              </div>
            </div>
      </>
    }
}

export default App;
