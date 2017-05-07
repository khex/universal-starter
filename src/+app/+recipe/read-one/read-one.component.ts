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
import { Title }                   from '@angular/platform-browser';

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
  private jsonTag: any;

  constructor(private model: ModelService,
              private route: ActivatedRoute,
              private element: ElementRef,
              private renderer: Renderer,
              private titleService: Title,
              private meta: Meta) {
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
          /*  LD+JSON inserted under <read-one> tag  */
          this.renderer.setText(this.jsonTag, text);
          /*  Page Title  */
          this.titleService.setTitle(`${data.name} - кулинарный рецепт`);
          /*  Meta & Open Graph Tags  */
          this.meta.addTags([
            {name: 'description',     content: data.description},
            {name: 'fb:app_id',       content: '331034313679007'}, // random number ?
            {name: 'og:title',        content: data.name},
            {name: 'og:type',         content: 'article'},
            {name: 'og:url',          content: 'http://localhost:3000/recipe/23'},
            {name: 'og:site_name',    content: 'Легумины'},
            {name: 'og:description',  content: data.description},
            {name: 'og:locale',       content: 'ru_RU'},
            {name: 'og:image',        content: `http://localhost:3000/images/${data.image}`},
            {name: 'og:image:width',  content: '500'},
            {name: 'og:image:height', content: '500'},
            {name: 'og:image:type',   content: 'image/jpg'},
            {name: 'article:author',  content: 'http://users.leguminy.ru/ron-kalenuik.html'},
            {name: 'article:section', content: 'Кулинария'},
            {name: 'article:tag',     content: 'На обед, На полдник, На ужин, Праздничное блюдо, Для детей'},
            {name: 'article:published_time', content: '03-04-2017'}
          ]);

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