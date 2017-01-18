import { Injectable } from '@angular/core';

@Injectable()
export class BuildService {

  public data;
  public resp = {
    date: new Date(),
    shema: {},
    ingredients: [],
    instructions: []
  };

  public builder(myForm:any) :any {  

    this.data = myForm.value;

    for (var key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        /* + Ingredients  */
        if (key === 'ingredients') {
          console.log('ingredients', this.data['ingredients'].length);
          for (var i = 0; i < this.data['ingredients'].length; i++) {
            let ingr = {};
            let ding = this.data['ingredients'][i];
            //  ding['group'].length > 1
            if (ding['group'])   { ingr['group']   = ding['group']; }
            if (ding['name'])    { ingr['group']   = this.strgToObjc(ding['name']) }
            if (ding['amount'])  { ingr['amount']  = ding['amount']; }
            if (ding['measure']) { ingr['measure'] = this.strgToObjc(ding['measure']); }
            if (ding['note'])    { ingr['note']    = ding['note']; }

            this.resp['ingredients'][i] = ingr;
          }
        }
        /* + Instructions  */
        else if (key === 'instructions') {
          // first step not empty like ''
          if(this.data['instructions'][0]['step'].length > 0) {
            this.resp['instructions'] = this.data['instructions'];
          }
        } 
        /* - Skima done! */
        else if (key === 'shema') {
          for(var subKey in this.data['shema']) {
            let dshs = this.data['shema'][subKey];
            if (dshs) {
              let tipe = this.shemaType(subKey);
              if (tipe === 'drop') {
                this.resp['shema'][subKey] = this.strgToObjc(dshs);
              }
              else if(tipe === 'mult') {
                let tempList = dshs.map( (val) => {
                  return this.strgToObjc(val);
                });
                this.resp['shema'][subKey] = tempList;
              }
              else {
                this.resp['shema'][subKey] = dshs;
              }
            }
          }
        }
        /* + MetaData  */
        else {
          //  this.data[key].length > 0
          if (this.data[key]) { this.resp[key] = this.data[key]; } 
        }

      }
    }
    return this.resp;
  }

  public shemaType(subKey: string):string {
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

  public strgToObjc(strg: any): any {
    console.info(strg);
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

}