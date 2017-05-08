import { Routes, RouterModule }  from '@angular/router';

import { ReadOneComponent }      from './read-one/read-one.component';
import { ReadManyComponent }     from './read-many/read-many.component';
import { CrUpComponent }         from './cr-up/cr-up.component';
import { DeleteComponent }       from './delete/delete.component'; 

/** htttp://localhost:3000/api/todos?
      value=This%20is%20My%20custom%20POST&
      id=5&
      created_at=2016-12-25T12%3A35%3A29.223Z&
      complete=false

    v0.2                 v0.3
    recipes/             recipes/             recipes/    
    recipes/create       recipes/add          recipes/add 
    recipes/read/23      recipes/show/23      recipes/23/show
    recipes/update/23    recipes/edit/23      reciped/23/edit 
    recipes/delete/23    recipes/delete/23    recipes/23/delete
 */
export const Routing = RouterModule.forChild([
  /*  Other Module  */
  { path: 'recipes',            component: ReadManyComponent },
  { path: 'recipe/create',      component: CrUpComponent },
  { path: 'recipe/update/:rid', component: CrUpComponent },
  { path: 'recipe/delete',      component: DeleteComponent },
  { path: 'recipe/:rid',        component: ReadOneComponent },

]);
