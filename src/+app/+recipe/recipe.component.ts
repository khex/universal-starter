import { Inject,
         Component,
	     ViewEncapsulation,
	     ChangeDetectionStrategy } from '@angular/core';
import { FormGroup,
         FormBuilder }             from '@angular/forms';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'recipe',
    templateUrl: './recipe.component.html'
})
export class RecipeComponent {

    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
        //  angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html
        //  name: fb.group({ first: '', last: '' }),
            name: '',
            description: '',
            imageUrl: '',
            category: '',
            purpose: ''
        });
    }

    onSubmit() {
        console.log(this.form.status);
        console.info(this.form.value);
    }
}
