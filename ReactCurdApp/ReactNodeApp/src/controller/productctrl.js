let prodModel = require("../model/productmodel.js");

exports.addProd = (req, res) => {
  let { name, price, pdesc } = req.body;
  prodModel.addproduct(name, price, pdesc)
    .then((result) => {
      res.status(201).json({ message: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getProduct=(req,res)=>{
  let Promise=prodModel.getallProd();
  Promise.then((result)=>{
    res.send(result);
  }).catch((err)=>{
    res.send(err);
  })
}
