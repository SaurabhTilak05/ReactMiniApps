let prodModel = require("../model/productmodel.js");

exports.addProd = (req, res) => {
  let { name, price, pdesc } = req.body;
  prodModel.addproduct(name, price, pdesc)
    .then((result) => {
      console.log(result);
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

exports.delProd=(req,res)=>{
  let id= req.params.id;
  let Promise=prodModel.deleteProd(id);
  Promise.then((result)=>{
    res.send(result);
  }).catch((err)=>{
    res.send(err);
  })
}


exports.getProductByName=(req,res)=>{
  let {name}=req.params.name;
  let Promise=prodModel.getProdByName(name);
  Promise.then((result)=>{
    res.send(result);
  }).catch((err)=>{
    res.send(err);
  })
}