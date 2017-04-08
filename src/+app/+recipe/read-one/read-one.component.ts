import { OnInit,
         OnDestroy,
         Component,
         Renderer,
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
//export class ReadOneComponent implements AfterContentInit {
export class ReadOneComponent {

  private rid: any;
  private sub: any; // <= WTF ?
  private recipe: any = {};
  public jsonTag: any;

  constructor(private model: ModelService,
              private route: ActivatedRoute,
              private element: ElementRef,
              private renderer: Renderer) {
    //  https://netbasal.com/e43ef673b26c
    this.jsonTag = this.renderer.createElement(this.element.nativeElement, "script");
    this.renderer.setElementAttribute(this.jsonTag, "type", "application/ld+json");
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.rid = params['rid'];
    });

    this.model
      .get(`/api/recipes/${this.rid}`)
      .subscribe(data => {
        this.recipe = data;
        this.JsonBuilder(data, (text) => {
          this.renderer.setText(this.jsonTag, text);
        });
    });
  }

  JsonBuilder(rcpt: any, callback: any): string {  

    let shema: any = {
      "@context": "http://schema.org/",
      "@type":    "Recipe",
      image:      "http://www.leguminy.com/",          
      author:          {"@type": "Person"},
      aggregateRating: {"@type": "AggregateRating"},
      nutrition:       {"@type": "NutritionInformation"},
    };
    /*  Defaul values  */
    shema.name             = rcpt.name;
    shema.description      = rcpt.description;
    shema.image           += rcpt.image;
    shema.author.name      = rcpt.author;
    shema.datePublished    = rcpt.published;
    shema.recipeIngredient = rcpt.ingredients.map((val) => {
      return `${val.name.text} - ${(val.amount) ? val.amount : ''} ${(val.measure) ? val.measure.text : ''}`;
    });
    /*  Custom values  */
    if(rcpt.shema.category)  { shema.recipeCategory = rcpt.shema.category.text; }
    if(rcpt.shema.yield)     { shema.recipeYield    = rcpt.shema.yield; }
    if(rcpt.shema.prepTime)  { shema.prepTime       = rcpt.shema.prepTime; }
    if(rcpt.shema.totalTime) { shema.totalTime      = rcpt.shema.totalTime; }
    /*  Random Values  */
    shema.aggregateRating.ratingValue = this.randomer(3, 3);
    shema.aggregateRating.reviewCount = this.randomer(15, 35);
    shema.nutrition.calories          = this.randomer(350, 500); 

    return callback(JSON.stringify(shema));
  }

  randomer(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}