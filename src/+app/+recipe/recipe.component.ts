import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'recipe',
  template: 'Recipe component'
})
export class RecipeComponent {
  constructor(@Inject('req') req: any) {
    // console.log('req',  req)
  }
}
