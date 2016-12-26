import { OnInit,
         OnDestroy,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute }          from '@angular/router';

import { ModelService }            from '../../shared/model/model.service';

@Component({
  selector: 'read-by-ID',
  templateUrl: './read-byid.template.html'
})
export class ReadByIDComponent {

  private recipe:any = {};
  private rid:any;
  private sub:any;

  constructor(private model: ModelService,
              private route: ActivatedRoute) { }

  private ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.rid = params['rid'];
      console.log(this.rid);
    });

    this.model
      .get(`/api/recipes/${this.rid}`)
      .subscribe(data => {
        this.recipe = data;
        console.log(this.recipe);
    });

  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

}