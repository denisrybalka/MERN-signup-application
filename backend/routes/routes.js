const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { fullName, username, password, email } = req.body;
    const hashPassword = bcrypt.hashSync(password, 7);
    const isUnique = !await User.findOne({ username });

    if (isUnique) {
      const signedUpUser = new User({
        fullName,
        username,
        password: hashPassword,
        email,
      });

      await signedUpUser
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          throw createError(500, "Something went wrong!");
        });
    } else {
      throw createError(403, `User ${username} is already exists!`);
    }
  } catch (error) {
    console.log(error);
    res.status(error.status);
    res.send({ message: error.message });
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
        throw createError(401, "Incorrect password!");
      }
    } else {
      throw createError(403, `User ${username} does not exist!`);
    }
  } catch (error) {
    console.log(error);
    res.status(error.status);
    res.send({ message: error.message });
  }
});

module.exports = router;
