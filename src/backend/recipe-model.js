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

var KeyvalueSchema = new Schema ({
  id:   Number,
  text: String
});

var RecipeSchema = new Schema({
  rid:         Number,
  name:        String,
  description: String,
  published:   Date,
  image:       String,
  author:      String,
  skima: {
    category:  KeyvalueSchema,
    cuisine:   KeyvalueSchema,
    diet:      KeyvalueSchema,
    yield:     String,
    prepTime:  String,
    totalTime: String,
    methods:  [KeyvalueSchema],
    purposes: [KeyvalueSchema],
    costs:     KeyvalueSchema,
    complxty:  KeyvalueSchema
  },
  ingredients:  [IngredientSchema],
  instructions: [InstructionSchema]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
