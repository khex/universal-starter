import { Inject,
         OnInit,
         Component,
         ViewEncapsulation,
         ChangeDetectionStrategy } from '@angular/core';
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
  selector:      'update',
  templateUrl:   './update.template.html',
  encapsulation: ViewEncapsulation.None
})
export class UpdateComponent implements OnInit{

  public rid: any;
  public linkEdit: boolean; //  route update or edit?
  public myForm: FormGroup;

  public ingrData = IngredData;
  public measData = MeasureData;
  public cuisData = CuisineData;
  public cateData = CategoryData;
  public dietData = DietData;
  public valuData = ValueData;
  public compData = ComplexData;
  public applData = ApplianceData;

  public ubntItems = [];
  public ubntData = [
    {id: 1, text: 'Edubuntu'},
    {id: 2, text: 'Kubuntu'},
    {id: 3, text: 'Lubuntu'},
    {id: 4, text: 'Xubuntu'},
    {id: 5, text: 'Linspire'},
    {id: 6, text: 'Mangaka'},
    {id: 7, text: 'Runtu'},
    {id: 8, text: 'Trisquel'}
  ]

  constructor(@Inject(FormBuilder)
              private _fb:   FormBuilder,
              private model: ModelService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /* [ { path: 'recipe', parameters: {} },
         { path: 'update', parameters: {} },
         { path: '23', parameters: {} } ] */
    let trsu = this.route.snapshot.url;
    this.linkEdit = (trsu[1]['path'] === 'update') ? true : false;

    this.myForm = this._fb.group({
      name:        '',
      description: '',
      image:       '',
      OS:          '',
      ubuntu:      [],
      ingredients: this._fb.array([]),
    });

    this.route.params.subscribe((prms) => { this.rid = prms['rid']; });
    this.model.get(`/api/recipes/${this.rid}`).subscribe((rcpt) => {
        
        this.myForm.controls['name'].patchValue(rcpt.name);
        this.myForm.controls['description'].patchValue(rcpt.description);
        this.myForm.controls['image'].patchValue(rcpt.image);
        //this.myForm.patchValue({'ingredients': [{
        //    "amount": "50",
        //    "measure": 'asdf',
        //    "note": "Вологодское",
        //}]});
        for (var i = 0; i < rcpt.ingredients.length; ++i) {
          this.addIngredient();
        }

      });
  }

  /** Ingredients Logic **/
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
  } // << Ingredients Logic

  consoleRecipe(myForm) {
    let data = myForm.value
    console.log(data);
  }

}
