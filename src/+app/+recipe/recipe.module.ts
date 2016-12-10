import { NgModule }            from '@angular/core';
import { FormsModule,
	     ReactiveFormsModule } from '@angular/forms';

import { SharedModule }        from '../shared/shared.module';
import { RecipeComponent }     from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  imports:      [ SharedModule,
                  RecipeRoutingModule,
                  FormsModule,
                  ReactiveFormsModule ],
  declarations: [ RecipeComponent ]
})
export class RecipeModule { }
