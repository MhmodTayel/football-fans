const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const userAuth = async (req, res, next) => {
  
  if (
    req.method == "POST" &&
    (req.url == "/users/login" || req.url == "/users/register" )
  ) {
    return next();
    
  }
  const { authorization } = req.headers;
  const payload = await jwt.verify(authorization, process.env.SECRET);
  User.findOne({ username: payload.username }).then((user) => {
    req.user = user;
    next();
  });
};

module.exports = userAuth;
