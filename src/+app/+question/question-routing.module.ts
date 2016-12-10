import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';

import { QuestionComponent } from './question.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'question', component: QuestionComponent }
    ])
  ]
})
export class QuestionRoutingModule { }
