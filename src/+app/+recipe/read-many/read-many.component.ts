import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { ModelService }            from '../../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector:    'read',
  templateUrl: './read-many.template.html'
})
export class ReadManyComponent {

  public recipes: any[];

  constructor(public model: ModelService) {
    this.universalInit();
  }

  universalInit() {
    this.model
      .get('/api/recipes', {page: 1, amount: 5})
      .subscribe(data => {
        console.log(data);
        this.recipes = data;
    });
  }

}
