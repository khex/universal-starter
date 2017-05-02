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
      name:         '',
      description:  '',
      image:        '',
    //ubuntu:       [], multiple example
      ingredients:  this._fb.array([]),
      instructions: this._fb.array([]),
      shema:        this._fb.group({
        category:   '',
        cuisine:    '',
        prepTime:   '',
        totalTime:  '',   
    })
    });

    this.route.params.subscribe((prms) => { this.rid = prms['rid']; });
    this.model.get(`/api/recipes/${this.rid}`).subscribe((rcpt) => {
        
        this.myForm.controls['name'].patchValue(rcpt.name);
        this.myForm.controls['description'].patchValue(rcpt.description);
        this.myForm.controls['image'].patchValue(rcpt.image);
        //  value == <select value='' ...>
        //  this.myForm.controls['so'].patchValue('8, Trisquel', {onlySelf: true});

        /** Ingredients  **/
        for (var i = 0; i < rcpt.ingredients.length; ++i) {
          var ingr  = rcpt.ingredients[i];
          var grup = (ingr.group) ? ingr.group : '';
          var name  = `${ingr.name.id}, ${ingr.name.text}`;
          var amnt  = (ingr.amount) ? ingr.amount : '';
          var meas  = `${ingr.measure.id}, ${ingr.measure.text}`;
          var note  = (ingr.note) ? ingr.note : '';
          this.addIngredient(grup, name, amnt, meas, note);
        }

        /** Instructions **/
        for (var i = 0; i < rcpt.instructions.length; ++i) {
          var step = rcpt.instructions[i]['step'];
          this.addInstruction(step);
        }

        /**  Shema  **/
        var RS = rcpt.shema;
        this.myForm.patchValue({
          shema: {category: `${RS.category.id}, ${RS.category.text}`}
        });
        this.myForm.patchValue({
          shema: {cuisine: `${RS.cuisine.id}, ${RS.cuisine.text}`}
        });
        this.myForm.patchValue({
          shema: {prepTime: (typeof RS.prepTime !== 'string') ? RS.prepTime.text : RS.prepTime}
        });
        this.myForm.patchValue({
          shema: {totalTime: (typeof RS.totalTime !== 'string') ? RS.totalTime.text : RS.totalTime}
        });
      });
  }

  /** Ingredients Logic
   *  create empty like initIngredient()
   *  addIngredient('', '', '', '', '');  **/
  addIngredient(gr, na, am, me, no) {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this._fb.group({
      group:   gr,
      name:    na,
      amount:  am,
      measure: me,
      note:    no
    }));
  }

  removeIngredient(i: number) {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
  } // << Ingredients Logic

  /** Instruction Logic **/
  addInstruction(step) {
    const control = <FormArray>this.myForm.controls['instructions'];
    control.push(this._fb.group({
      step: step
    }));
  }

  removeInstruction(i: number) {
    const control = <FormArray>this.myForm.controls['instructions'];
    control.removeAt(i);
  } // << Instruction Logic

  consoleRecipe(myForm) {
    let data = myForm.value
    console.log(data);
  }

}
