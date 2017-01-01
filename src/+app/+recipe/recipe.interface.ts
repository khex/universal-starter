// recipe.interface.ts

export interface Recipe {
  // required field with minimum 5 characters
  name:        string;
  description: string;
  image:       string;
  date:        string;
  // schema.org
  category:    string,
  method:      string;
  cuisine:     string;
  yield:       string;
  totalTime:   string;
  prepTime:    string;
  cookTime:    string;
  diet:        string;
  purpose:     string;
  costs:       string;
  complxty:    string;
  instructions:Instruction[];
  ingredients: Ingredient[];
}

export interface Ingredient {
  group:   string;
  name:    string;
  amount:  string;
  measure: string;
  note:    string;
}

export interface Instruction {
  step: string;   
}
