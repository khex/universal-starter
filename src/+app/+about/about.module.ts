import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { AboutComponent }     from './about.component';
import { AboutThisComponent } from './aboutThis.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AboutThisComponent
  ]
})
export class AboutModule { }
