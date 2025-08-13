import React from "react";
import ReactDom from "react-dom";
import prodService from "../services/prodService";

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            pdesc: "",
            msg:""
        };
    }

    saveProduct = () => {
  let promise = prodService.addProd(this.state);

  promise
    .then((result) => {
      console.log(result); 
      this.setState({ msg: result.data.message });
    })
    .catch((err) => {
      this.setState({ msg: "Failed to save product" });
    });
};

    render() {
        return (
            <>
                <div className="container bg-dark text-white mt-5 p-3">
                <h1 style={{ textAlign: 'center' }} className="heading mb-5">Add Product</h1>
                    <div className="form-group pl-5 pr-5">
                        <input type="text" name="name" className="form-control" value={this.state.name}  onChange={(e) => this.setState({ name:e.target.value})  } placeholder="Enter Product Name"  />
                    </div>


                 <div className="form-group mt-1 pl-5 pr-5">
                        <input type="text" name="price" className="form-control" value={this.state.price}  onChange={(e) => this.setState({ price:e.target.value})  } placeholder="Enter Product Price "  />
                    </div>


                    <div className="form-group mt-1  pl-5 pr-5">
                        <input type="text" name="pdesc" className="form-control" value={this.state.pdesc}  onChange={(e) => this.setState({ pdesc:e.target.value})  } placeholder="Enter Description"  />
                    </div>

                    <div className="form-group mt-1  pl-5 pr-5">
                        <input type="button" id="btn" className="form-control bg-primary" onClick={this.saveProduct} value="Add Products" />
                    </div>

                    <div className="form-group mt-1  pl-5 pr-5">
                        <label >{this.state.msg}</label>
                    </div>


                </div>
            </>
        );
    }
}

export default AddProduct;
