//our root app component
import { Inject,
         OnInit,
         Component,
         ViewEncapsulation } from '@angular/core';
import { FormGroup,
         FormArray,
         Validators,
         FormBuilder }       from '@angular/forms';
import { ModelService }      from '../../shared/model/model.service';

import { BuildFunk }         from './build.function';
import { IRecipe }           from '../recipe.interface';
import { DietData,
         ValueData,
         IngredData,
         MethodData,
         MeasureData,
         PurposeData,
         CuisineData,
         ComplexData,
         CategoryData,
         AppliancesData }    from './dropdown-data';

@Component({
  selector:    'create',
  templateUrl: './create.template.html',
  // Enable dynamic HTML styles
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit{

  public ingrData = IngredData;
  public measData = MeasureData;
  public cuisData = CuisineData;
  public cateData = CategoryData;
  public dietData = DietData;
  public valuData = ValueData;
  public compData = ComplexData;
  public applData = AppliancesData;

  /** helper func for nh2-selec multiple **/
  public itemsToString(value:Array<any> = []):string {
    return value.map((item:any) => { return item.text; }).join(',');
  }


  /**  ng2-select > Method  **/
  public  methodItems: Array<any> = MethodData;
  private methods:any = [];

  public refreshMethod(value:any):void {
    this.methods = value;
    let mtds = value.map((meth:any) => { return `${meth.id}, ${meth.text}`; });
    this.myForm.patchValue({'shema': {'methods': mtds}});
  } //  <--  The End  -->


  /**  ng2-select > Purpose  **/
  public purposeItems: Array<any> = PurposeData;
  private purpose:any = [];

  public refreshPurpose(value:any):void {
    this.purpose = value;
    let purp = value.map((prp:any) => { return `${prp.id}, ${prp.text}`; });
    this.myForm.patchValue({'shema': {'purposes': purp}});
  } //  <--  The End  -->


  public myForm: FormGroup;

  constructor(@Inject(FormBuilder)
              private _fb:   FormBuilder,
              private model: ModelService) { }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      name:         '',
      description:  '',
      image:        '',
      shema: this._fb.group({
        category:    '',
        cuisine:     '',
        cost:        '',
        diet:        '',
        yield:       '',
        prepTime:    '',
        totalTime:   '',
        complexity:  '',
        methods:    [''],
        purposes:   ['']
      //appliances: ['']
      }),
      ingredients:  this._fb.array([ this.initIngredient()  ]),
      instructions: this._fb.array([ this.initInstruction() ]),
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

  saveRecipe(myForm) {
    let data = myForm.value;
    let resp = BuildFunk(data);

    console.log(resp);
    this.model
      .post('/api/recipes/', JSON.stringify({resp}))
      .subscribe(data => {
        console.info(data);
    });

  }
}
