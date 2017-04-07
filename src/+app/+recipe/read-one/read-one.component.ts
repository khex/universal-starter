import { OnInit,
         OnDestroy,
         Component,
         ElementRef,
         AfterContentInit,
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
export class ReadOneComponent implements AfterContentInit {

  private rid: any;
  private sub: any; // <= WTF ?
  private recipe: any = {};
  public JsonLD = {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "name": "Strawberry-Mango Mesclun Recipe",
    "image": "http://images.media-allrecipes.com/userphotos/600x600/1116471.jpg",
    "author": { "@type": "Person", "name": "scoopnana"},
    "datePublished": "2008-03-03",
    "description": "Mango, strawberries, and sweetened dried cranberries are a vibrant.",
    "prepTime": "PT15M",
    "totalTime": "PT14M",
    "recipeYield": "12 servings",
  };

  constructor(private model: ModelService,
              private route: ActivatedRoute,
              private elementRef: ElementRef) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.rid = params['rid'];
    });

    this.model
      .get(`/api/recipes/${this.rid}`)
      .subscribe(data => {
        this.recipe = data;
    });

  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  ngAfterContentInit() {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.innerText = JSON.stringify(this.JsonLD);
    this.elementRef.nativeElement.appendChild(s);
  }

}