import React from "react";
import ReactDom from "react-dom";

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            pdesc: "",
        };
    }
    render() {
        return (
            <>
                <div className="container bg-dark text-white mt-5 p-5">

                    <div className="form-group">
                        <input type="text" name="name" className="form-control" value={this.state.name}  onChange={(e) => this.setState({ name:e.target.value})  } placeholder="Enter Product Name"  />
                    </div>


                 <div className="form-group mt-1 p-1">
                        <input type="text" name="opone" className="form-control" value={this.state.price}  onChange={(e) => this.setState({ price:e.target.value})  } placeholder="Enter Product Price "  />
                    </div>


                    <div className="form-group mt-1 p-1">
                        <input type="text" name="optwo" className="form-control" value={this.state.pdesc}  onChange={(e) => this.setState({ pdesc:e.target.value})  } placeholder="Enter Description"  />
                    </div>

                   <div className="form-group mt-1 p-1">
            <input type="button" id="btn" className="form-control " onClick={this} value="Add Products" />
          </div>
                </div>
            </>
        );
    }
}

export default AddProduct;
