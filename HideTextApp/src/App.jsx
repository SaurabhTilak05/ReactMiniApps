import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{

  constructor(){
    super();
      this.state={
        showText:true
      }
  }
    textHide=()=>{
      this.setState({showText:!this.state.showText});
    };
    render(){
      return<>
      <div className="main"> 
      {this.state.showText &&
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aperiam, cum ad provident reiciendis ex non rerum sequi, optio, laboriosam necessitatibus. Iste minus corrupti exercitationem enim saepe fuga expedita illo.</p>}
        <button  className="btn"  onClick={this.textHide}> {this.state.showText ? "Hide Text" : "Show Text"} </button>
      </div>
      </>
    }
}
export default App;