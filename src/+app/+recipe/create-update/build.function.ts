export function BuildFunk(data) {

  let resp = {
    published: new Date(),
    author: 'Рон Каленьюик',
    // Leguminy.ru & Leguminy.com
    publisher: 'Легумины.ру',
    shema:        {},
    ingredients:  [],
    instructions: []
  };

  /**
   *  Helper Func
  **/
  let shemaType = (subKey: string) => {
    let drop = ['category', 'cuisine', 'diet', 'costs', 'complxty']; 
    let mult = ['methods', 'purposes'];
    let text = ['prepTime', 'totalTime', 'yield'];

    let dropTrue = drop.some((val) => { return val === subKey} );
    let multTrue = mult.some((val) => { return val === subKey} );
    let textTrue = text.some((val) => { return val === subKey} );

    if      (dropTrue) { return 'drop' }
    else if (multTrue) { return 'mult' }
    else if (textTrue) { return 'text' }
    else               { console.info('shemaType SubKey Error', subKey)}      
  };

  /**
   *  Helper Func
  **/
  let strgToObjc= (strg: any) => {
    if (typeof strg !== 'string') {
      throw Error(`strgToObjc: bad strg -> ${strg}`);
    } else {
      let list = strg.split(", ");
      return {
        id: Number(list[0]),
        text: list[1],
      }
    }
  };

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      /*  Ingredients  */
      if (key === 'ingredients') {
        for (var i = 0; i < data['ingredients'].length; i++) {
          let ingr = {};
          let ding = data['ingredients'][i];

          if (ding['group'])   { ingr['group']   = ding['group']; }
          if (ding['name'])    { ingr['name']    = strgToObjc(ding['name']) }
          if (ding['amount'])  { ingr['amount']  = ding['amount']; }
          if (ding['measure']) { ingr['measure'] = strgToObjc(ding['measure']); }
          if (ding['note'])    { ingr['note']    = ding['note']; }

          resp['ingredients'][i] = ingr;
        }
      }
      /*  Instructions  */
      else if (key === 'instructions') {
        // first step not empty like ''
        if(data['instructions'][0]['step'].length > 0) {
           resp['instructions'] = data['instructions'];
        }
      } 
      /*  Skima done!  */
      else if (key === 'shema') {
        for(var subKey in data['shema']) {
          let dshs = data['shema'][subKey];
          if (dshs) {
            let tipe = shemaType(subKey);
            if (tipe === 'drop') {
              resp['shema'][subKey] = strgToObjc(dshs);
            }
            else if(tipe === 'mult') {
              let tempList = dshs.map( (val) => {
                return strgToObjc(val);
              });
              resp['shema'][subKey] = tempList;
            }
            else {
              resp['shema'][subKey] = dshs;
            }
          }
        }
      }
      /*  Image URL  */
      else if (key === 'image') {
        resp[key] = `images/${data[key]}`;
      }
      /*  MetaData  */
      else {
        /*  data[key].length > 0  */
        if (data[key]) { resp[key] = data[key]; }
      }

    }
  }
  return resp;
}
