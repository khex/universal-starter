//our root app component
import { Inject,
         OnInit,
         Component }   from '@angular/core';
import { FormGroup,
         FormArray,
         Validators,
         FormBuilder } from '@angular/forms';

//import { Country, State } from 'src/country';
//import { DataService }    from 'src/dataservice';
import { Recipe }      from '../recipe.interface';

@Component({
  selector:    'create',
  templateUrl: './create.template.html',
  //providers:   [DataService]
})
export class CreateComponent implements OnInit{
  
  public myForm: FormGroup;

  constructor(@Inject(FormBuilder) private _fb: FormBuilder) { }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      name:        ['Пицца с ветчиной и шампиньонами'],
      description: ['Пицца "В день рождения сына". У сына внезапно приключился день рождения'],
      image:       ['http://www.povarenok.ru/images/recipes/27/2786/278630.jpg'],
      date:        new Date(), // set format dd:mm:hhhh
      // schema.org
      category:    [''],
      method:      [''],
      cuisine:     [''],
      yield:       [''],
      totalTime:   [''],
      prepTime:    [''],
      cookTime:    [''],
      diet:        [''],
      purpose:     [''],
      costs:       [''],
      complxty:    [''],
      // arrays
      instructions:this._fb.array([ this.initInstruction() ]),
      ingredients: this._fb.array([ this.initIngredient()  ])
    });
  }


  /** INGREDIENT LOGIC **/
  initIngredient() {
    return this._fb.group({
      group:   [''],
      name:    [''],
      amount:  [''],
      measure: [''],
      note:    ['']
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
      step:    ['']
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

  /**
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  onSelect(countryid: any): void {
    this.states = this._ds.getStates()
        .filter((item)=> item.countryid == countryid); 
  }
  **/
}
