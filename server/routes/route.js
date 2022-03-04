const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserDetails,
  login,
} = require("../controllers/userController");

router.get("/user/", async (req, res, next) => {
  getUserDetails(req.user._id)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.post("/register", (req, res, next) => {
  console.log(req.body);
  createUser(req.body)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  login({ username, password })
    .then((token) => res.json(token))
    .catch((err) => next(err));
});

module.exports = router;
