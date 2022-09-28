var express = require("express");
var router = express.Router();
var userService = require("../services/userService");

router.delete("/:id", function (req, res, next) {
  var userId = req.params.id;
  userService.deleteUser(userId);
  res.status(200).send("Deleted");
});

router.put("/:id", function (req, res, next) {
  var userId = req.params.id;
  var name = req.body.name || null;
  var lastName = req.body.lastName || null;
  var age = req.body.age || null;
  var email = req.body.email || null;

  var newUser = {};
  if (name) {
    newUser.name = name;
  }
  if (lastName) {
    newUser.lastName = lastName;
  }
  if (age) {
    newUser.age = age;
  }
  if (email) {
    newUser.email = email;
  }

  var user = userService.updateUser(userId, newUser);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.status(200).json(user);
  }
});

module.exports = router;
