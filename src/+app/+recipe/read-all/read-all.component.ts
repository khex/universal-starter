import { Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { ModelService }            from '../../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'read',
  templateUrl: './read-all.template.html'
})
export class ReadAllComponent {

  public recipes: any[];

  constructor(public model: ModelService) {
    this.universalInit();
  }

  universalInit() {
    this.model
      .get('/api-serv/recipes')
      .subscribe(data => {
        console.log(data);
        this.recipes = data;
    });
  }

}
