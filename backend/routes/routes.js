const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  try {
    const { fullName, username, password, email } = req.body;

    const hashPassword = bcrypt.hashSync(password, 7);

    const signedUpUser = new User({
      fullName,
      username,
      password: hashPassword,
      email,
    });

    signedUpUser
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (e) {
    console.error(e);
    res.json("Registration failed");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const loggingUser = await User.findOne({ username });
    if (loggingUser) {
      if (bcrypt.compareSync(password, loggingUser.password)) {
        res.json(loggingUser);
      } else {
        res.json("Password is incorrect!");
      }
    } else {
      res.json("User is not found!");
    }
  } catch (e) {
    console.error(e);
    res.json("Login was failed");
  }
});

module.exports = router;
