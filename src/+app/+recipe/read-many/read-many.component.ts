import { OnInit,
         Renderer,
         ElementRef,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
import { ModelService }            from '../../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation:   ViewEncapsulation.Emulated,
  selector:       'read',
  templateUrl:    './read-many.template.html'
})
export class ReadManyComponent {

  public recipes: any[];    // recipes data   
  public page: number = 2;  // current page
  public amnt: number = 5;  // items per page
  public link: string = '/api/recipes';

  constructor(public model: ModelService,
                     elementRef: ElementRef,
                     renderer: Renderer) {
    //http://stackoverflow.com/questions/38053067
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      console.log('Smth was cliked!'); // Action on every 'click event'
    });
    this.getRecipes(this.page, this.amnt);
  }

  getRecipes(page: number, amnt: number) {
    let url = `${this.link}?page=${page}&amount=${amnt}`;
    console.log(`Read Many URL: ${url}`);
    this.model
      .get(url)
      .subscribe(data => {
        console.log(data);
        this.recipes = data;
    });
  }

  setPage() {
    // do nothing ;)
    //if (page < 1 || page > this.pager.totalPages) { return; }

    this.page = this.page + 1;
    console.log(`Current page: ${this.page}`);
    this.getRecipes(this.page, this.amnt);
    //console.log(this.recipes);

    // this.pager = this.pagerService.getPager(this.allItems.length, page);
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

}
