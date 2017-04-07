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
              private element: ElementRef,
              private renderer: Renderer) {
    //  Attributes are defined by HTML.
    //  Properties are defined by DOM.
    //  https://netbasal.com/e43ef673b26c
    let jsonTag = renderer.createElement(element.nativeElement, "script");
    renderer.setElementAttribute(jsonTag, "type", "application/ld+json");
    renderer.setText(jsonTag, "SetText condition.");

    //renderer.createText(jsonTag, "CreateText condition.");
  }

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
  /**
  ngAfterContentInit() {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.innerText = JSON.stringify(this.JsonLD);
    this.elementRef.nativeElement.appendChild(s);
  }
  **/
}