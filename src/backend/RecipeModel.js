var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let RecipeSchema = new Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
