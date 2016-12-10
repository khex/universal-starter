import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';

import { QuestionComponent }            from './question.component';
import { QuestionRoutingModule }        from './question-routing.module';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  imports:      [ QuestionRoutingModule,
                  BrowserModule,
                  ReactiveFormsModule ],
  declarations: [ QuestionComponent,
                  DynamicFormComponent,
                  DynamicFormQuestionComponent ],
  bootstrap:    [ QuestionComponent ]
})
export class QuestionModule {
  constructor() { }
}
