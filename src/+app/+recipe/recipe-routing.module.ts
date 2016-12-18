import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent }      from './recipe.component';
import { AddRecipeComponent }   from './add/add-recipe.component';

import { ReadComponent }        from './route-comp/read.component';
import { CreateComponent }      from './route-comp/create.component';
import { DeleteByIDComponent }  from './route-comp/deleteByID.component';
import { ReadByIDComponent }    from './route-comp/readByID.component';
import { UpdateByIDComponent }  from './route-comp/updateByID.component';

//export const routing = RouterModule.forChild([
export const routing = RouterModule.forChild([
  { path: 'recipe',          component: RecipeComponent },
  { path: 'add-recipe',      component: AddRecipeComponent },
  { path: 'post',            component: ReadComponent},
  { path: 'post/add',        component: CreateComponent },
  { path: 'post/:id',        component: ReadByIDComponent},
  { path: 'post/:id/delete', component: DeleteByIDComponent},
  { path: 'post/:id/update', component: UpdateByIDComponent}
]);
