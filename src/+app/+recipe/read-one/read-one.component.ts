import { OnInit,
         OnDestroy,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute }          from '@angular/router';

import { ModelService }            from '../../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation:   ViewEncapsulation.Emulated,
  selector:    'read-one',
  templateUrl: './read-one.template.html'
})
export class ReadOneComponent {

  private rid: any;
  private sub: any;
  private recipe: any = {};
  private shema:  any = {};
  private ingred: any = {};
  private instra: any = {};

  constructor(private model: ModelService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.rid = params['rid'];
    });

    this.model
      .get(`/api/recipes/${this.rid}`)
      .subscribe(data => {
        this.recipe = data;
        this.shema  = data.shema;
        this.ingred = data.ingredients;
        this.instra = data.instructions;
    });

  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}