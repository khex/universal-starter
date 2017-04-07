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
//public greeting: Promise<boolean>;

  constructor(private model: ModelService,
              private route: ActivatedRoute,
              private element: ElementRef,
              private renderer: Renderer) {
    //  Attributes are defined by HTML.
    //  Properties are defined by DOM.
    //  https://netbasal.com/e43ef673b26c
    //let jsonTag = renderer.createElement(element.nativeElement, "script");
    //renderer.setElementAttribute(jsonTag, "type", "application/ld+json");
    //renderer.setText(jsonTag, JSON.stringify(this.JsonLD));  // vs? .createText()
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
        // here comes my service cb func
        this.recipe = data; 
        this.JsonBuilder(data, (text) => {
          this.renderer.setText(this.jsonTag, text);
        });
    });

    //this.renderer.setText(this.jsonTag, JSON.stringify(this.jsld));

  }

  JsonBuilder(rcpt: any, cb: any): any {  

    let shema: any = {
      "@context": "http://schema.org/",
      "@type": "Recipe",
    //image: "http://localhost:3000/images/",
      author: { "@type": "Person" },
      aggregateRating: {"@type": "AggregateRating", ratingValue: "5", reviewCount: "52"},
      nutrition: {"@type": "NutritionInformation", calories: "319 cal"},
      recipeIngredient: []
    };

    return cb('This is the callback text');
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}