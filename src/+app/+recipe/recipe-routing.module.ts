import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';

import { RecipeComponent }    from './recipe.component';
import { AddRecipeComponent } from './add/add-recipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'recipe',     component: RecipeComponent },
      { path: 'add-recipe', component: AddRecipeComponent }
    ])
  ]
})
export class RecipeRoutingModule { }
