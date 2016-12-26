import { NgModule }            from '@angular/core';
import { FormsModule,
	       ReactiveFormsModule } from '@angular/forms';

import { SharedModule }        from '../shared/shared.module';

import { Routing }             from './recipe-routing.module';

import { ReadAllComponent }    from './read-all/read-all.component';
import { CreateComponent }     from './create-update/create.component';
import { ReadByIDComponent }   from './read-byid/read-byid.component';
import { UpdateByIDComponent } from './create-update/update-byid.component';

@NgModule({
  imports:      [ Routing,
                  SharedModule,
                  FormsModule,
                  ReactiveFormsModule ],
  declarations: [ ReadAllComponent,
                  CreateComponent,
                  ReadByIDComponent,
                  UpdateByIDComponent ]
})
export class RecipeModule { }
