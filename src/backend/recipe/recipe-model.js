var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  rid:         Number,
  name:        String,
  description: String,
  image:       String,
  publisher:   String,  // Organization > SimplyRecipes.com
  author:      String,  // Person       > Jamie Oliver
  published:   Date,
  shema: {
    yield:         String,
    prepTime:      String,
    totalTime:     String,
    category:    { id: Number, text: String },
    cuisine:     { id: Number, text: String },
    diet:        { id: Number, text: String },
    cost:        { id: Number, text: String },
    complexity:  { id: Number, text: String },
    methods:    [{ id: Number, text: String }],
    appliances: [{ id: Number, text: String }],
    purposes:   [{ id: Number, text: String }]
  },
  instructions: [{
    step: String
  }],
  ingredients:  [{
    group:         String,
    name:    { id: Number, text: String },
    amount:        String,
    measure: { id: Number, text: String },
    note:          String
  }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
