const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: true,
  },
  country: {
    type : String,
    required: true,
  },
  value : {
    type : Number,
    // required: true
  }

});
const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
