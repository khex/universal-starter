var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  rid:         Number,
  name:        String,
  description: String,
  image:       String,
  publisher:   String,  // Should be <Organization>
  author:      String,  // Should be <Person> 
  published:   Date,
  shema: {
    yield:         String,
    prepTime:    { iso: String, text: String},
    totalTime:   { iso: String, text: String},
    category:    { id: Number, text: String },
    cuisine:     { id: Number, text: String },
    diet:        { id: Number, text: String },
    cost:        { id: Number, text: String },
    complexity:  { id: Number, text: String },
    methods:    [{ id: Number, text: String }],
    purposes:   [{ id: Number, text: String }],
    appliances: [{ id: Number, text: String }]
  },
  instructions: [{ step: String }],
  ingredients:  [{
    group:   String,
    amount:  String,
    note:    String,
    name:    { id: Number, text: String },
    measure: { id: Number, text: String }
  }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
