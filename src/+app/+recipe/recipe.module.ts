import { NgModule }            from '@angular/core';
import { FormsModule,
	       ReactiveFormsModule } from '@angular/forms';

import { SharedModule }        from '../shared/shared.module';

import { Routing }             from './recipe-routing.module';

import { ReadComponent }       from './read.component';
import { CreateComponent }     from './create.component';
import { DeleteByIDComponent } from './deleteByID.component';
import { ReadByIDComponent }   from './readByID.component';
import { UpdateByIDComponent } from './updateByID.component';

@NgModule({
  imports:      [ Routing,
                  SharedModule,
                  FormsModule,
                  ReactiveFormsModule ],
  declarations: [ ReadComponent,
                  CreateComponent,
                  DeleteByIDComponent,
                  ReadByIDComponent,
                  UpdateByIDComponent ]
})
export class RecipeModule { }
