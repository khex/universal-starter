# AngN
 - AngN
 - AngiN
 - AngiNo
 - ng-ex, Ngex

# synonims to 'Angular'
    adj bent, jagged, akimbo, bifurcate, cornered, crooked, crossing,
    crotched, divaricate, forked, intersecting, oblique, sharp-cornered,
    skewed, slanted, staggered, zigzag

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:   String,
  about:   String,
  ingredient: [{
    // ??? IngredId
  }]
  image:   String,
  orim:    Boolean,
  steps:   Boolean,
  host:    String,
  link:    String,
  reid:    Number,  //  RecipeID
  scraped: Date,
  created: Date,

  category: String,
  subcat:   String,
  yield:    String,  //  1 буханка хлеба 
  prepTime: String,  //  15 minutes => "PT15M"
  cookTime: String,  //  ISO 8601 duration format
  totalTime: String,
  nutrition: {
    calories: Number,     //  <Energy>
    carbohydrate: Number, //  <Mass> The number of grams of carbohydrates.
    cholesterol: Number,  //   <Mass> The number of milligrams of cholesterol.
    fat: Number,          //   <Mass> The number of grams of fat.
    fiber: Number,        //   <Mass> The number of grams of fiber.
    protein: Number,      //   <Mass> The number of grams of protein.
    saturatedFat: Number, //   <Mass> The number of grams of saturated fat.
    serving: String,      //   <Text> The serving size, in terms of the number of volume or mass.
    sodium: Number,       //   <Mass> The number of milligrams of sodium.
    sugar: Number,        //   <Mass> The number of grams of sugar.
    transFat: Number,     //   <Mass> The number of grams of trans fat.
    unsaturatedFat: Number, //   <Mass> The number of grams of unsaturated fat.  
  },
  time: {
    prep: String,
    cook: String,
    total: String
  }, 
  cousine:  String,
  method: String,
  reason: String,
  forDiet: String,  //  http://schema.org/RestrictedDiet
  instructions: [String],
  appliance: [String],  //  сковорода

  social: {
    olives: Number,  //  aka likes
    saved: Number,
    viewed: Number,
    comments: [String]
  }

  /* Schema Example */
  comments: [{
    body: String,
    date: Date
  }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```