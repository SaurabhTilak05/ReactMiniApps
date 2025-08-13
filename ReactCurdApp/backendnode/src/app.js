const bodyParser = require("body-parser");
let express=require("express");
let router=require("./routes/route.js");
require("dotenv").config();
let app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

module.exports=app;