const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  postQuantity: {
    type: Number,
    required: true,

  },
  
});

const HomeInfo = mongoose.model("HomeInfo", homeSchema);

module.exports = HomeInfo;