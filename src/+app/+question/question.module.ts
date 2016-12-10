import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';

import { QuestionComponent }     from './question.component';
import { QuestionRoutingModule } from './question-routing.module';

/* ex. Dynamic Question */
import { DFComponent }           from './df.component';
import { DFQuestionComponent }   from './df-question.component';

@NgModule({
  imports:      [ BrowserModule,
                  QuestionRoutingModule,
                  ReactiveFormsModule ],
  declarations: [ QuestionComponent,
                  DFComponent,
                  DFQuestionComponent ],
  bootstrap:    [ QuestionComponent ]
})
export class QuestionModule {
  constructor() { }
}
