import { NgModule }            from '@angular/core';
import { FormsModule,
	       ReactiveFormsModule }   from '@angular/forms';

import { SharedModule }        from '../shared/shared.module';
import { RecipeComponent }     from './recipe.component';
import { AddRecipeComponent }  from './add/add-recipe.component';
import { routing }             from './recipe-routing.module';

import { ReadComponent }       from './route-comp/read.component';
import { CreateComponent }     from './route-comp/create.component';
import { DeleteByIDComponent } from './route-comp/deleteByID.component';
import { ReadByIDComponent }   from './route-comp/readByID.component';
import { UpdateByIDComponent } from './route-comp/updateByID.component';

@NgModule({
  imports:      [
                  SharedModule,
                  routing,
                  FormsModule,
                  ReactiveFormsModule
                ],
  declarations: [ RecipeComponent,
                  AddRecipeComponent,
                  /*  route-components  */
                  ReadComponent,
                  CreateComponent,
                  DeleteByIDComponent,
                  ReadByIDComponent,
                  UpdateByIDComponent
                 ]
})
export class RecipeModule { }
