let express = require("express");
let router = express.Router();
let prodctrl = require("../controller/productctrl.js");
let email=require("../controller/emilctrl.js");


router.post("/addproducts", prodctrl.addProd);
router.get("/viewproduct",prodctrl.getProduct);
router.delete("/delProd/:id",prodctrl.delProd);
module.exports = router;
