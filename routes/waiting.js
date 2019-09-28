var express = require("express");
var router = express.Router();

var data = [];
/* GET home page. */

router.post("/", function(req, res) {
  console.log("this is the request");

  console.log(req.body.numbers);
  //let index = data.findIndex(function(node) {});

  let index = data.findIndex(function(node) {
    return (
      node.numbers === req.body.numbers && node.password === req.body.password
    );
  });

  if (index == -1) {
    data.push(req.body);
    res.send(data);
  } else {
    res.send({ queue: index });
  }
});

module.exports = router;
