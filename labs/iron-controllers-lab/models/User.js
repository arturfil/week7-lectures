const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String
  }
});

module.exports = model("User", UserSchema);
