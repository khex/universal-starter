//our root app component
import { Inject,
         OnInit,
         Component,
         ViewEncapsulation } from '@angular/core';
import { FormGroup,
         FormArray,
         Validators,
         FormBuilder }       from '@angular/forms';

import { IRecipe }           from '../recipe.interface';
import { IngredsData }           from './ingreds-data';
import { CuisineData }       from './cuisine-data';

@Component({
  selector:    'create',
  templateUrl: './create.template.html',
  encapsulation: ViewEncapsulation.None // Enable dynamic HTML styles
})
export class CreateComponent implements OnInit{

  public myForm: FormGroup;

  /**  ng2-select > Cuisine  **/
  private cuisineObjc:any = {};
  private cuisineData:Array<any> = CuisineData;

  public refreshValue(cuisine:any):void {
    this.cuisineObjc = cuisine;
    /** stackoverflow.com/questions/35039610 **/
    this.myForm.patchValue({cuisine: `${cuisine.id}, ${cuisine.text}`});
  }


  constructor(@Inject(FormBuilder) private _fb: FormBuilder) { }

  ngOnInit() {
     
    Ingreds.forEach((ingred:{iid:number, name:string}) => {
      this.items.push({
        id:   ingred.iid,
        text: ingred.name
      });
    });

    // we will initialize our form here
    this.myForm = this._fb.group({
      name:         '',
      description:  '',
      image:        '',
      date:         new Date(),
      ingredients:  this._fb.array([ this.initIngredient()  ]),
      instructions: this._fb.array([ this.initInstruction() ]),
      // schema.org
      category:  '',
      method:    '',
      cuisine:   '',
      yield:     '',
      totalTime: '',
      prepTime:  '',
      cookTime:  '',
      diet:      '',
      purpose:   '',
      costs:     '',
      complxty:  ''
    });
  }

  /** INGREDIENT LOGIC **/
  initIngredient() {
    return this._fb.group({
      group:   '',
      name:    '',
      amount:  '',
      measure: '',
      note:    ''
    });
  }

  addIngredient() {
    // add ingredient to the list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  removeIngredient(i: number) {
    // remove ingredient from the list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
  }

  /** INSTRUCTION LOGIC **/
  initInstruction() {
    return this._fb.group({
      step: ['']
    });
  }

  addInstruction() {
    // add ingredient to the list
    const control = <FormArray>this.myForm.controls['instructions'];
    control.push(this.initInstruction());
  }

  removeInstruction(i: number) {
    // remove ingredient from the list
    const control = <FormArray>this.myForm.controls['instructions'];
    control.removeAt(i);
  }

  //save(model: Recipe): void {
  save(myForm): void {
    // call API to save customer
    console.log(myForm.value);
  }

}
