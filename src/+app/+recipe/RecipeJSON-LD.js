@type: Recipe

+name: <Text>    // Strawberry-Mango Mesclun Recipe
//  Must be a minimum of 185px by 185px, with a 1:1 aspect ratio.
+image: <URL>  // http://www.example.com/images/cherry.jpg

//  A short summary describing the dish.
+description: <Text>   //   	Mango ... dressing.

/**
"author": {
  "@type": "Person",
  "name": "Jamie Oliver"
}
**/
+author: <Person>
//  The date the recipe was published, in ISO 8601 format.
+datePublished: <Date>  //  2009-11-05
------------------------------------------------------------
+recipeCategory: <Text>  // appetizer
//  in ISO 8601 format.
//  Use totalTime or a combination of both cookTime and prepTime.
+prepTime:  <Duration>  // PT15M
+cookTime:  <Duration>  // PT15M 	
+totalTime: <Duration>  // PT15M 	
+recipeYield: <Text>  // ? 2 pizzas? || 4 servings
/**
"nutrition": {
  "@type": "NutritionInformation",
  "servingSize": "1 bowl",
  "calories": "319 cal",
}
**/
+nutrition.calories: <Energy>
+recipeInstructions: <Text>  //  ['sder', 'verve', 'vertve']
/**
"recipeIngredient": [
  "1/2 cup sugar",
  "3/4 cup canola oil",
  "1 teaspoon salt"
]
**/
+recipeIngredient: <Text> // []
-------------------------------------------------------------
/**
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "52"
}
**/
aggregateRating: <AggregateRating>

/** aka comments???
review: {
  "@type": "Review",
  "author": "Ellie",
  "datePublished": "2011-04-01",
  "description": "The lamp burned out and now I have to replace it.",
  "name": "Not a happy camper",
  "reviewRating": {
    "@type": "Rating",
    "bestRating": "5",
    "ratingValue": "1",
    "worstRating": "1"
  }
}
**/
review:  <Review>  // ???