var express = require("express");
var router = express.Router();

var data = [];
/* GET home page. */

router.post("/", function(req, res) {
  console.log("this is the request");
  console.log(req.body);

  data.push(req.body);

  res.send(data);
});

module.exports = router;
