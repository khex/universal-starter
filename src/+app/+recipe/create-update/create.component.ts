//our root app component
import { Inject,
         OnInit,
         Component,
         ViewEncapsulation } from '@angular/core';
import { FormGroup,
         FormArray,
         Validators,
         FormBuilder }       from '@angular/forms';
import { ActivatedRoute }    from '@angular/router';
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
         ApplianceData }    from './dropdown-data';

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
  public applData = ApplianceData;


  /**  ng2-select > Method  **/
  public methods:any = [];
  public methodItems: Array<any> = MethodData;
  public methActive = [
    {id: 4, text: 'Варение', qqq: '4534535353'},
    {id: 6, text: 'Квашение', quatro: 'The main'}
  ];

  public refreshMethod(value:any): void {
    this.methods = value;
    console.log('value:', value, '\n', 'methods,', this.methods);
    let mtds = value.map((meth:any) => { return `${meth.id}, ${meth.text}`; });
    this.myForm.patchValue({'shema': {'methods': mtds}});
  }

  /**  ng2-select > Purpose  **/
  public purpose:any = [];
  public purposeItems: Array<any> = PurposeData;
  public purpActive = [{id: 1, text: 'На завтрак'}, {id: 2, text: 'На обед'}]

  public refreshPurpose(value:any): void {
    this.purpose = value;
    let purp = value.map((prp:any) => { return `${prp.id}, ${prp.text}`; });
    this.myForm.patchValue({'shema': {'purposes': purp}});
  }

  /**  ng2-select > Appliances  **/
  public appliance: any = [];
  public applianceItems: Array<any> = ApplianceData;

  public refreshAppliance(value:any): void {
    this.appliance = value;
    let appl = value.map((app:any) => { return `${app.id}, ${app.text}`; });
    this.myForm.patchValue({'shema': {'appliances': appl}});
  }


  public myForm: FormGroup;

  constructor(@Inject(FormBuilder)
              private _fb:   FormBuilder,
              private model: ModelService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    let temp = this.route.snapshot;
    console.log('Snapshot:\n', temp);

    // we will initialize our form here
    this.myForm = this._fb.group({
      name:         '',
      description:  '',
      image:        '',
      shema:        this._fb.group({
        category:    '',
        cuisine:     '',
        diet:        '',
        yield:       '',
        prepTime:    '',
        totalTime:   '',
        costs:       '',
        complexity:  '',
        methods:    [''],
        purposes:   [''],
        appliances: [''],
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

  /** Iinstruction Logic **/
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

    console.log('saveRecipe:', resp);
    this.model
      .post('/api/recipes/', JSON.stringify({resp}))
      .subscribe(data => {
        console.info('From server:', data);
    });
  }

}
