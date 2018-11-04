var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var LikeArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true, 
    // match:[/^(?:(?!react).)+$/ig, "no bad react"]
  },
  ID: {
    type: String,
    required: true, 
  
  }

});
var LikeArticle = mongoose.model("LikeArticle", LikeArticleSchema);
module.exports = LikeArticle;