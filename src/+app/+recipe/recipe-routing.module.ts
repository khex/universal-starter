import { Routes, RouterModule } from '@angular/router';

import { ReadComponent }        from './read.component';
import { CreateComponent }      from './create.component';
import { ReadByIDComponent }    from './readByID.component';
import { UpdateByIDComponent }  from './updateByID.component';
import { DeleteByIDComponent }  from './deleteByID.component';

/** htttp://localhost:3000/api/todos?
      value=This%20is%20My%20custom%20POST&
      id=5&
      created_at=2016-12-25T12%3A35%3A29.223Z&
      complete=false
**/
export const Routing = RouterModule.forChild([
  { path: 'recipes',           component: ReadComponent},
  { path: 'recipe/create',     component: CreateComponent },
  { path: 'recipe/:id',        component: ReadByIDComponent},
  //  ex: 'recipe/:id/delete'
  { path: 'recipe/delete/:id', component: DeleteByIDComponent},
  //  ex: 'recipe/:id/update'
  { path: 'recipe/update/:id', component: UpdateByIDComponent}
]);
