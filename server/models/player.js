const mongoose = require("mongoose");



const playerSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    // unique: true,
    required: true,
  },
  lastName: {
    type: String,
    // unique: true,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    // required: true,
     
  },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
});
const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
