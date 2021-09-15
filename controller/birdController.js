const { birdModel } = require("../models/birdModel");

let birdArray = [];

exports.addbirdController = function addbirdController(req, res) {
  console.log("addbirdController request: " + JSON.stringify(req.body));
  let bird = req.body;
  let birdName = bird.name;
  let birdOrigin = bird.origin;
  let addbird = new birdModel(birdName, birdOrigin);
  console.log("addbirdController: " + JSON.stringify(addbird));
  birdArray.push(addbird);
  res.json({
    status: "success",
    message: "bird added",
    birdCount: addbird.counter,
  });
};

exports.getbirdListController = function getbirdListController(req, res) {
  console.log("getbirdListController request: " + JSON.stringify(req.body));
  res.json({
    status: "success",
    message: "bird added",
    birdList: birdArray,
    birdListCount: birdArray.length,
  });    
} 
