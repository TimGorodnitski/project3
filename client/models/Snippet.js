const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const snippetSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: true
  },
  notes: String,
  language: String,
  tags: []
});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;