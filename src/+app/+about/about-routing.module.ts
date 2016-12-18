import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutThisComponent } from './aboutThis.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AboutComponent},
      { path: 'about/this', component: AboutThisComponent}

    ])
  ]
})
export class AboutRoutingModule { }
