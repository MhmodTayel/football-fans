const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
},
{
  toJSON: {
    transform: (doc, ret, opts) => {
      delete ret.password;
      delete ret.__v;
      return ret;
    },
  },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre("save", function () {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
