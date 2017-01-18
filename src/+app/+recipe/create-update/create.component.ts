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

import { IRecipe }           from '../recipe.interface';
import { DietData,
         ValueData,
         IngredData,
         MethodData,
         MeasureData,
         PurposeData,
         CuisineData,
         CategoryData,       
         ComplexData }       from './dropdown-data';

@Component({
  selector:    'create',
  templateUrl: './create.template.html',
  encapsulation: ViewEncapsulation.None // Enable dynamic HTML styles
})
export class CreateComponent implements OnInit{

  public ingrData = IngredData;
  public measData = MeasureData;
  public cuisData = CuisineData;

  public cateData = CategoryData;
  public dietData = DietData;
  public valuData = ValueData;
  public compData = ComplexData;

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
              private _fb: FormBuilder,
              private model: ModelService,) { }

  ngOnInit() {

    // we will initialize our form here
    this.myForm = this._fb.group({
      name:        '',
      description: '',
      image:       '',
      date:        new Date(),
      shema:       this._fb.group({
        category:  '',
        cuisine:   '',
        diet:      '',
        yield:     '',
        prepTime:  '',
        totalTime: '',
    //  cookTime:  '',
        methods:  [''],
        purposes: [''],
        costs:     '',
        complxty:  ''        
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

  strgToObjc(strg: any) :any {
    if (typeof strg !== 'string') {
      throw Error(`strgToObjc: bad strg -> ${strg}`);
    } else {
      let list = strg.split(", ");
      return {
        id:   Number(list[0]),
        text: list[1],
      }
    }
  }

  shemaType(subKey: string) :string {
    let drop = ['category', 'cuisine', 'diet', 'costs', 'complxty']; 
    let mult = ['methods', 'purposes'];
    let text = ['prepTime', 'totalTime', 'yield'];

    let dropTrue = drop.some( val => { return val === subKey} );
    let multTrue = mult.some( val => { return val === subKey} );
    let textTrue = text.some( val => { return val === subKey} );

    if      (dropTrue) { return 'drop' }
    else if (multTrue) { return 'mult' }
    else if (textTrue) { return 'text' }
    else               { console.info('shemaType SubKey Error', subKey)}
  }

  save(myForm) :void {

    let data = myForm.value;
    let resp = {
      published: new Date(),
      author: 'Рон Каленьюик',
      shema: {},
      ingredients: [],
      instructions: []
    };

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        /* + Ingredients  */
        if (key === 'ingredients') {
          for (var i = 0; i < data['ingredients'].length; i++) {
            let ingr = {};
            let ding = data['ingredients'][i];
            //  ding['group'].length > 1
            if (ding['group'])   { ingr['group']   = ding['group']; }
            if (ding['name'])    { ingr['group']   = this.strgToObjc(ding['name']) }
            if (ding['amount'])  { ingr['amount']  = ding['amount']; }
            if (ding['measure']) { ingr['measure'] = this.strgToObjc(ding['measure']); }
            if (ding['note'])    { ingr['note']    = ding['note']; }

            resp['ingredients'][i] = ingr;
          }
        }
        /* + Instructions  */
        else if (key === 'instructions') {
          // first step not empty like ''
          if(data['instructions'][0]['step'].length > 0) {
            resp['instructions'] = data['instructions'];
          }
        } 
        /* + Skima done! */
        else if (key === 'shema') {
          for(var subKey in data['shema']) {
            let dshs = data['shema'][subKey];
            if (dshs) {
              let tipe = this.shemaType(subKey);
              if (tipe === 'drop') {
                resp['shema'][subKey] = this.strgToObjc(dshs);
              }
              else if(tipe === 'mult') {
                let tempList = dshs.map( (val) => {
                  return this.strgToObjc(val);
                });
                resp['shema'][subKey] = tempList;
              }
              else {
                resp['shema'][subKey] = dshs;
              }
            }
          }
        }
        /* + MetaData  */
        else {
          //  data[key].length > 0
          if (data[key]) { resp[key] = data[key]; } 
        }

      }
    }

    console.log(resp);
    this.model
      .post('/api/recipes/', JSON.stringify({resp}))
      .subscribe(data => {
        console.info(data);
    });

  }
}
