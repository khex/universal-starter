import { Component,
	     ViewEncapsulation,
	     ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector:    'recipe',
    template: `
       <h3>Main Recipe Component</h3>
    `
})
export class RecipeComponent { }
