var express = require("express");
var router = express.Router();
var userService = require("../services/userService");

router.get("/", function (req, res, next) {
  var data = userService.getUers();
  res.json(data);
});

router.post("/", function (req, res, next) {
  var name = req.body.name || null;
  var lastName = req.body.lastName || null;
  var age = req.body.age || null;
  var email = req.body.email || null;

  if (!name) {
    res.status(400).send("Field name is not present");
  }
  if (!lastName) {
    res.status(400).send("Field lastName is not present");
  }
  if (!age) {
    res.status(400).send("Field age is not present");
  }
  if (!email) {
    res.status(400).send("Field email is not present");
  } else {
    var id = userService.getNewId();
    var user = {
      id,
      name,
      lastName,
      age,
      email,
    };
    userService.addUser(user);
    res.status(201).json(user);
  }
});

module.exports = router;
