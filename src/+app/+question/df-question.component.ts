import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './modules/question-base';

@Component({
  selector: 'df-question',
  templateUrl: './partials/df-question.component.html'
})
export class DFQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
