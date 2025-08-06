let express = require("express");
let router = express.Router();
let prodctrl = require("../controller/productctrl.js");

router.post("/addproducts", prodctrl.addProd);
router.get("/viewproduct",prodctrl.getProduct);
module.exports = router;
