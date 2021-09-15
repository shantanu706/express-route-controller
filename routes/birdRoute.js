const express = require("express");
const { addbirdController, getbirdListController } = require("../Controller/birdController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the bird API" });
});

router.get("/list", getbirdListController);

router.post("/add", addbirdController);

module.exports = router;
