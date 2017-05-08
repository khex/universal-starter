import { NgModule }              from '@angular/core';
import { FormsModule,
         ReactiveFormsModule }   from '@angular/forms';
import { SharedModule }          from '../shared/shared.module';
import { Meta }                  from '../../angular2-meta';

import { Routing }               from './recipe-routing.module';
import { ReadOneComponent }      from './read-one/read-one.component';
import { ReadManyComponent }     from './read-many/read-many.component';
import { CrUpComponent }         from './cr-up/cr-up.component';
import { DeleteComponent }       from './delete/delete.component'; 




@NgModule({
  imports:      [ Routing,
                  SharedModule,
                  FormsModule,
                  ReactiveFormsModule ],
  declarations: [ ReadManyComponent,
                  ReadOneComponent,
                  CrUpComponent,
                  DeleteComponent ],
  providers:    [ Meta ]
})
export class RecipeModule { }
