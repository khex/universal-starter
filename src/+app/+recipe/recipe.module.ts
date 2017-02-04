import { NgModule }            from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { SelectModule }        from 'ng2-select/ng2-select';
import { SharedModule }        from '../shared/shared.module';

import { Routing }             from './recipe-routing.module';
import { ReadAllComponent }    from './read-all/read-all.component';
import { CreateComponent }     from './create-update/create.component';
import { ReadOneComponent }    from './read-one/read-one.component';
import { UpdateComponent }     from './create-update/update.component';


@NgModule({
  imports:      [ Routing,
                  SharedModule,
                  FormsModule,
                  SelectModule,
                  ReactiveFormsModule ],
  declarations: [ ReadAllComponent,
                  CreateComponent,
                  ReadOneComponent,
                  UpdateComponent ],
  // for Services Only!
  providers:    [ ]
})
export class RecipeModule { }
