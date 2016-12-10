import { Component }       from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  styleUrls: ['./partials/question.component.css'],
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class QuestionComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
