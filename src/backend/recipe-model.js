var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeyValSchema = new Schema ({
  id:   Number,
  text: String
});

var IngredientSchema = new Schema ({
  group:   String,
  name:    KeyValSchema,
  amount:  String,
  measure: KeyValSchema,
  note:    String
});

var InstructionSchema = new Schema ({
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
    category:    KeyValSchema,
    cuisine:     KeyValSchema,
    diet:        KeyValSchema,
    yield:       String,
    prepTime:    String,
    totalTime:   String,
    methods:    [KeyValSchema],
    purposes:   [KeyValSchema],
    costs:       KeyValSchema,
    complxty:    KeyValSchema
  },
  ingredients:  [IngredientSchema],
  instructions: [InstructionSchema]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
