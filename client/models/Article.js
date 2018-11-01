var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true, 
    unique:true, 
    // match:[/^(?:(?!react).)+$/ig, "no bad react"]
  },

});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;