import React from "react";
import prodService from "../services/prodService";
export default class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
     
    };
  }
  componentDidMount() {
    prodService.getProduct()
      .then(res => {

        this.setState({ productList: res.data });
      })
  }


   deleteProduct = (id) => {
    prodService.delProd(id)
      .then(res => {
        this.setState({
          productList: this.state.productList.filter(prod => prod.id !== id)
        });
      })
      .catch(err => {
        this.setState({ msg: "Failed to delete product" });
      });
  };

  render() {
    return (
      <div className="container mt-5 bg-dark p-5">
        <h1 className="mb-4"  style={{color:'white', textAlign:'center'}} >Product List</h1>
        <table className="table table-dark text-white">
          <thead className="tbl table-dark text-white">
            <tr>
              <th>SR.NO</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>DESCRIPTION</th>
              <th>DELETE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productList.map((prod, index) => (
              <tr >
                <td>{index + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.pdesc}</td>
                <td>
                  <button className="btn btn-sm" onClick={() => this.deleteProduct(prod.id)}> Delete</button>
                </td>
                <td>
                   <a href="">Update</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
