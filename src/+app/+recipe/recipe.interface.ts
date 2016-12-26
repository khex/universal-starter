// recipe.interface.ts

export interface Recipe {
  // required field with minimum 5 characters
  name:        string;
  description: string;
  imageUrl:    string;
  // schema.org
  category:    string,
  cookMeth:    string;
  cuisine:     string;
  yield:       string;
  totalTime:   string;
  prepTime:    string;
  cookTime:    string;
  diet:        string;
  purpose:     string;
  // recipe have one or more Ingredients
  ingredients: Ingredient[];
}

export interface Ingredient {
  name:    string;
  amount:  number;
  measure: string;
  note:    string;
}
