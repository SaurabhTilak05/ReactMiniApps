import axios from "axios";
class ProductService {
   addProd(prodData) {
  return axios.post("http://localhost:8080/addproducts", prodData ,{
    headers: {
      'Content-Type': 'application/json'
         }
        });
    } 
    getProduct() {
    return axios.get("http://localhost:8080/viewproduct", {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
   delProd(id) {
    return axios.delete(`http://localhost:8080/delProd/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


}
export default new ProductService();

