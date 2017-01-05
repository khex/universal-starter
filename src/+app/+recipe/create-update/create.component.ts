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
import { Ingreds }           from './ingred-data';

@Component({
  selector:    'create',
  templateUrl: './create.template.html',
  encapsulation: ViewEncapsulation.None // Enable dynamic HTML styles
})
export class CreateComponent implements OnInit{

  /**  NG2-SELECT  **/
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private items:Array<any> = [];

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
  /**  end of NG2-SELECT  **/

  public myForm: FormGroup;

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
