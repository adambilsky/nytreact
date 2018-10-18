// Article MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // synopsis: String,
  date: Date,
  url: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
