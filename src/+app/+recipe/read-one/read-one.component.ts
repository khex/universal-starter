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
import { Meta }                    from '../../../angular2-meta';

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
              private renderer: Renderer,
              private meta: Meta) {
    //  https://netbasal.com/e43ef673b26c
    this.jsonTag = this.renderer.createElement(this.element.nativeElement, "script");
    this.renderer.setElementAttribute(this.jsonTag, "type", "application/ld+json");

    meta.addTags([
      {name: 'application-name', content: 'Name of my application'},
      {name: 'description', content: 'A description of the page'}
    ]);
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

  /**
    <meta property="fb:app_id" content="331034313679007">
    <meta property="og:title" content="Простой пирог с черносливом и орехами">
    <meta property="og:type" content="article">
    <meta property="og:image" content="http://www.povarenok.ru/data/cache/2017apr/06/24/1978180_23671-114x114x.jpg">
    <meta property="og:url" content="http://www.povarenok.ru/recipes/show/140038/">
    <meta property="og:site_name" content="Поварёнок">
    <meta property="og:description" content="Кулинарный рецепт">

    article:published_time - datetime - When the article was first published.
    article:modified_time - datetime - When the article was last changed.
    article:expiration_time - datetime - When the article is out of date after.
    article:author - profile array - Writers of the article.
    article:section - string - A high-level section name. E.g. Technology
    article:tag - string array - Tag words associated with this article.

  **/

}