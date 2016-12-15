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
import { Recipe }      from './recipe.interface';

@Component({
  selector:    'my-app',
  templateUrl: './add-recipe.component.html',
  //providers:   [DataService]
})
export class AddRecipeComponent implements OnInit{
  
  name: string = 'Angular2';
  public myForm: FormGroup;

  
  //selectedCountry: Country = new Country(0, 'India');
  //countries: Country[];
  //states: State[];
  /**
  @Inject(FormBuilder);
  @Inject(DataService);
  constructor(_fb: FormBuilder, private _ds: DataService) {
  //this.countries = this._ds.getCountries();

    this.myForm = _fb.group({
    //Basic data povarenok.ru/recipes/show/40998/
      'name': 'Пицца с ветчиной и шампиньонами',
      'description': `Пицца "В день рождения сына". У сына внезапно приключился день рождения.\
      Нет, я, конечно, помню, когда он родился, но праздновать он не собирался, \
      а тут приходит и спрашивает: "Мама, можно ко мне зайдут друзья? Мы посидим, \
      пива попьем". Говорю: "Так ведь нет ничего!" "А ничего и не надо!" - отвечает. \
      Ну, как же! 8 молодых, здоровых парней с пивом и закусить нечем... Надо \
      срочно что-то придумать! Ну, конечно! Надо испечь пиццу! Даже 2 пиццы! Чтобы \
      всем хватило! Бегом на кухню...`,
      'imageUrl': 'http://www.povarenok.ru/images/recipes/27/2786/278630.jpg',
    });
  }
  **/

  constructor(@Inject(FormBuilder) private _fb: FormBuilder) { }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      name:        ['Пицца с ветчиной и шампиньонами', [Validators.required, Validators.minLength(5)]],
      description: ['Пицца "В день рождения сына". У сына внезапно приключился день рождения'],
      imageUrl:    ['http://www.povarenok.ru/images/recipes/27/2786/278630.jpg'],
      // schema.org
      category:   [''],
      cookMeth:   [''],
      cuisine:    [''],
      yield:      [''],
      totalTime:  [''],
      prepTime:   [''],
      cookTime:   [''],
      diet:       [''],
      purpose:    [''],
      //ingredients
      ingredients: this._fb.array([ this.initIngredient() ])
    });
  }

  initIngredient() {
    // initialize our ingredients
    return this._fb.group({
      name:    [''],
      amount:  [''],
      measure: [''],
      note:    [''],
      group:   [''],
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
