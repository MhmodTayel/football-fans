require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Player = require("../models/player");

const { generateTeam } = require("./teamController");

const createUser = async (body) => {
  const country = body.country;
  const { _id, username } = await User.create(body);
  const team = await generateTeam(country, username);

  return User.findOneAndUpdate({ _id }, { team }, { new: true });
};

const login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw "invalid user";

  const isValid = await user.comparePassword(password);

  if (!isValid) throw "Worng Password";
  
  return jwt.sign(
    {
      username,
      _id: user._id,
      maxAge: "2d",
    },
    process.env.SECRET
  );
};

const getUserDetails = async (_id) => {
  const user = await User.findOne({ _id }).populate("team");
  const players = await Player.find({ team: user.team._id });
  return { user, players };
};
module.exports = { createUser, getUserDetails, login };
