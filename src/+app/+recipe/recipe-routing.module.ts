import { Routes, RouterModule } from '@angular/router';

import { ReadAllComponent }     from './read-all/read-all.component';
import { CreateComponent }      from './create-update/create.component';
import { ReadByIDComponent }    from './read-byid/read-byid.component';
import { UpdateByIDComponent }  from './create-update/update-byid.component';


/** htttp://localhost:3000/api/todos?
      value=This%20is%20My%20custom%20POST&
      id=5&
      created_at=2016-12-25T12%3A35%3A29.223Z&
      complete=false
**/
export const Routing = RouterModule.forChild([
  /*  ? Other Module  */
  { path: 'recipes',            component: ReadAllComponent},
  //       recipes/category     RecipesComponent
  //       recipes/ingredient   15 per page
  //       recipes/method
  //       recipes/cuisine
  //       recipes/diet
  //       recipes/purpose
  //       recipes/time [fast, slow, medium]
  //       recipes/yield [6, >6, <9]

  { path: 'recipe/create',      component: CreateComponent },
    //    'recipes/show/:id'
  { path: 'recipe/:rid',        component: ReadByIDComponent},
  //  ex: 'recipe/:id/update'
  { path: 'recipe/update/:rid', component: UpdateByIDComponent}
]);
