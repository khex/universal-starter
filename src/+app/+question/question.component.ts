import { Component }       from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  styles: [`
    /* Master Styles */
    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }
    h2, h3 {
      color: #444;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: lighter;
    }
    body {
      margin: 2em;
    }
    body, input[text], button {
      color: #888;
      font-family: Cambria, Georgia;
    }
    a {
      cursor: pointer;
      cursor: hand;
    }
    button {
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #aaa;
      cursor: auto;
    }

    /* Navigation link styles */
    nav a {
      padding: 5px 10px;
      text-decoration: none;
      margin-right: 10px;
      margin-top: 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 4px;
    }
    nav a:visited, a:link {
      color: #607D8B;
    }
    nav a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }
    nav a.active {
      color: #039be5;
    }

    /* items class */
    .items {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 24em;
    }
    .items li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .items li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .items li.selected {
      background-color: #CFD8DC;
      color: white;
    }
    .items li.selected:hover {
      background-color: #BBD8DC;
    }
    .items .text {
      position: relative;
      top: -3px;
    }
    .items .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    /* everywhere else */
    * {
      font-family: Arial, Helvetica, sans-serif;
    }
  `],
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
