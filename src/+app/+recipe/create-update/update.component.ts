/**  Schema v20  **/
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
         MeasureData,        
         CuisineData,
         ComplexData,
         CategoryData,
         MethodData,
         PurposeData,
         ApplianceData }    from './dropdown-data';

@Component({
  selector:      'update',
  templateUrl:   './update.template.html',
  encapsulation: ViewEncapsulation.None
})
export class UpdateComponent{

  public rid: number;
  public linkEdit: boolean;  //  update or edit?
  public myForm: FormGroup;

  public ingrData = IngredData;
  public measData = MeasureData;
  public cuisData = CuisineData;
  public cateData = CategoryData;
  public dietData = DietData;
  public valuData = ValueData;
  public compData = ComplexData;
  public methData = MethodData;
  public purpData = PurposeData;
  public applData = ApplianceData;

  constructor(@Inject(FormBuilder)
              private _fb:   FormBuilder,
              private model: ModelService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    //  'update' or 'create'
    let trsu = this.route.snapshot.url;
    this.linkEdit = (trsu[1]['path'] === 'update') ? true : false;

    this.myForm = this._fb.group({
      name:         '',
      description:  '',
      image:        '',
      ingredients:  this._fb.array([]),
      instructions: this._fb.array([]),
      shema:        this._fb.group({
        category:   '',
        cuisine:    '',
        prepTime:   '',
        totalTime:  '',
        diet:       '',
        yield:      '',
        cost:       '',
        complexity: '',
        methods:    [],
        purposes:   [],
        appliances: []
      })
    });

    this.route.params
        .subscribe((prms) => { this.rid = +prms['rid']; });
    this.model.get(`/api/recipes/${this.rid}`).subscribe((rcpt) => {
        
        this.myForm.controls['name'].patchValue(rcpt.name);
        this.myForm.controls['description'].patchValue(rcpt.description);
        this.myForm.controls['image'].patchValue(rcpt.image);
      //this.myForm.controls['so'].patchValue('8, Trisquel', {onlySelf: true});

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
        if (RS.category) {
          this.myForm.patchValue({shema: {
            category: `${RS.category.id}, ${RS.category.text}`
          }});
        }
        if (RS.cuisine) {
          this.myForm.patchValue({shema: {
            cuisine: `${RS.cuisine.id}, ${RS.cuisine.text}`
          }});
        }
        if (RS.prepTime) {
          this.myForm.patchValue({shema: {
            prepTime: (typeof RS.prepTime !== 'string')
            ? RS.prepTime.text : RS.prepTime
          }});
        }
        if (RS.totalTime) {
          this.myForm.patchValue({shema: {
            totalTime: (typeof RS.totalTime !== 'string')
            ? RS.totalTime.text : RS.totalTime
          }});
        }
        if (RS.diet) {
          this.myForm.patchValue({shema: {
            diet: `${RS.diet.id}, ${RS.diet.text}`
          }});
        }
        if (RS.yield) {
          this.myForm.patchValue({shema: {
            yield: RS.yield
          }});
        }
        if (RS.cost) {
          this.myForm.patchValue({shema: {
            cost: `${RS.cost.id}, ${RS.cost.text}`
          }});
        }
        if (RS.complexity) {
          this.myForm.patchValue({shema: {
            complexity: `${RS.complexity.id}, ${RS.complexity.text}`
          }});
        }
        if (RS.methods) {
          /** temp for lower case like: '2, выпекание' **/
          this.myForm.patchValue({shema: {
            methods: RS.methods.map((meth) => {
              return (/[А-Я]/.test(meth.text[0]))
                ? `${meth.id}, ${meth.text}` : '';
            })
          }});
        }
        if (RS.purposes) {
          this.myForm.patchValue({shema: {
            purposes: RS.purposes.map((purp) => {
              return `${purp.id}, ${purp.text}`
            })
          }});
        }
        if (RS.appliances) {
          this.myForm.patchValue({shema: {
            appliances: RS.appliances.map((appl) => {
              return `${appl.id}, ${appl.text}`
            })
          }});
        }
      });
  }

  /** Ingredients Logic
   *  create empty like initIngredient()
   *  addIngredient('', '', '', '', '');  **/
  addIngredient(gr, na, am, me, no) {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this._fb.group({
      group: gr, name: na, amount: am, measure: me, note: no
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

  updateRecipe(myForm) {
    let data = myForm.value;
    let resp = BuildFunk(data);

    console.log('updateRecipe:', resp);
    this.model
      .put(`/api/recipes/${this.rid}`, JSON.stringify({resp}))
      .subscribe(data => {
        console.info('From server:', data);
    });
  }

}
