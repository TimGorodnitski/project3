const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;