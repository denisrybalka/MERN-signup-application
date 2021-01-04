const express = require("express");
const router = express.Router();
const signUpTemplate = require("../models/Sign-up");

router.post("/sign", (req, res) => {
  const { fullName, username, password, email } = req.body;

  const signedUpUser = new signUpTemplate({
    fullName,
    username,
    password,
    email,
  });

  signedUpUser.save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
