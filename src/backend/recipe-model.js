var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  rid:         Number,
  name:        String,
  description: String,
  published:   Date,
  image:       String,
  author:      String,
  shema: {
    category:  { id: Number, text: String },
    cuisine:   { id: Number, text: String },
    diet:      { id: Number, text: String },
    yield:       String,
    prepTime:    String,
    totalTime:   String,
    methods:  [{ id: Number, text: String }],
    purposes: [{ id: Number, text: String }],
    costs:     { id: Number, text: String },
    complxty:  { id: Number, text: String }
  },
  instructions: [{
    step: String
  }],
  ingredients:  [{
    group:     String,
    name:    { id: Number, text: String },
    amount:    String,
    measure: { id: Number, text: String },
    note:      String
  }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
