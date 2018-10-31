const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const snippetSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: false
  },
  postQuantity: {
    type: Number,
    required: true
  },
 

});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;