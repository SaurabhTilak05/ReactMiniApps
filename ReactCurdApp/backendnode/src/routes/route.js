let express = require("express");
let router = express.Router();
let prodctrl = require("../controller/productctrl.js");

router.post("/addproducts", prodctrl.addProd);
router.get("/viewproduct",prodctrl.getProduct);
router.delete("/delProd/:id",prodctrl.delProd);
router.get("/getProdByName", prodctrl.getProductByName);


module.exports = router;
