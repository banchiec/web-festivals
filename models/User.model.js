const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({

  firstName: {
    type: String,
    required: true

  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'organizer', 'admin'],
    default: 'user',
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: "img.jpg"
  }

});

const User = model("User", userSchema);

module.exports = User;
