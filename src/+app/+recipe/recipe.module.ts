import { NgModule }            from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { SelectModule }        from 'ng2-select/ng2-select';
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
                  SelectModule,
                  ReactiveFormsModule ],
  declarations: [ ReadAllComponent,
                  CreateComponent,
                  ReadByIDComponent,
                  UpdateByIDComponent ],
  // for Services Only!
  providers:    [ ]
})
export class RecipeModule { }
