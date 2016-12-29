var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema ({
  group:   String,
  name:    String,
  amount:  Number,
  measure: String,
  note:    String
});

var InstructionSchema = new Schema ({
  step: String
});

var RecipeSchema = new Schema({
  rid:         Number,
  name:        String,
  description: String,
  published:   Date,
  image:       String,
  author:      String,
  skima: {
    category:  String,
    prepTime:  String,
    totalTime: String,
    method:   [String],
    cuisine:   String,
    yield:     String,
    forDiet:  [String],
    purpose:  [String],
    weight:    String,
    diffclty:  String,
    costs:     String,
    calories:  String
  },
  ingredients:  [IngredientSchema],
  instructions: [InstructionSchema]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
