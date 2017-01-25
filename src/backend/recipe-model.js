var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeyVal = new Schema ({
  id:   Number,
  text: String
});

var Ingredient = new Schema ({
  group:   String,
  name:    KeyVal,
  amount:  String,
  measure: KeyVal,
  note:    String
});

var Instruction = new Schema ({
  step: String
});

var RecipeSchema = new Schema({
  rid:           Number,
  name:          String,
  description:   String,
  published:     Date,
  image:         String,
  author:        String,
  shema: {
    category:    KeyVal,
    cuisine:     KeyVal,
    diet:        KeyVal,
    yield:       String,
    prepTime:    String,
    totalTime:   String,
    methods:    [KeyVal],
    purposes:   [KeyVal],
    costs:       KeyVal,
    complxty:    KeyVal
  },
  ingredients:  [Ingredient],
  instructions: [Instruction]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
