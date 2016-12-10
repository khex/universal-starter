import { Inject,
	     Component,
	     ViewEncapsulation,
	     ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'recipe',
    templateUrl: './recipe.component.html'
})
export class RecipeComponent {

    data: Object = {};

    constructor(@Inject('req') req: any) {
        console.log('req',  req)
    }

    onSubmit() {
        console.info(this.data);
    }
}
