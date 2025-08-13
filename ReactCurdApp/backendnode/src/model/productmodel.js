const { json } = require("body-parser");
let db = require("../../db.js");

exports.addproduct = (name, price, pdesc) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO products (name, price, pdesc) VALUES (?, ?, ?)", [name, price, pdesc], (err, result) => {
      if (err) {
        return reject("Something is wrong");
      } else {
        return resolve("Product Save Successfully....");
      }
    });
  });
};


exports.getallProd=()=>{
    return new Promise ((resolve, reject)=>{
        db.query("select *from products",(err, result)=>{
            if(err)
            {
                return reject("Data Not Found");

            }else{
                return resolve(result);
            }

        })
    })
}
exports.deleteProd=(id)=>{
  return new Promise((resolve, reject )=>{
    db.query("delete from products where id=?",[id],(err,result)=>{
      if(err)
      {
        return reject("Product Not Delete ");
      }
      else{
        return resolve("Product delete successfully...");
      }
    })
  })
}

exports.getProdByName=(name)=>{
   return new Promise ((resolve, reject)=>{
        db.query("select *from products where name like '%"+name+"%'",[name],(err, result)=>{
            if(err)
            {
                return reject("Data Not Found");

            }else{
                return resolve(result);
            }

        })
    })
}