export function BuildFunk(data) {

  let resp = {
    published:    new Date(),
    author:       'Рон Каленьюик',
    publisher:    'Легумины.ру',
    shema:        {},
    ingredients:  [],
    instructions: []
  };

  /**
   * [shemaType description]
   * @type {[type]}
   * Maybe change to `while`
   **/
  let shemaType = (subKey: string) => {

    let drop = ['category', 'cuisine', 'diet', 'cost', 'complexity']; 
    let mult = ['methods', 'purposes', 'appliances'];
    let time = ['prepTime', 'totalTime'];
    let text = ['yield'];

    let dropTrue = drop.some((val) => { return val === subKey} );
    let multTrue = mult.some((val) => { return val === subKey} );
    let timeTrue = time.some((val) => { return val === subKey} );
    let textTrue = text.some((val) => { return val === subKey} );

    if      (dropTrue) { return 'drop' }
    else if (multTrue) { return 'mult' }
    else if (timeTrue) { return 'time' }
    else if (textTrue) { return 'text' }
    else               { throw new EvalError('Undefined Shema Value') }
    /**    
    if      (drop.includes(subKey)) { return 'drop' }
    else if (mult.includes(subKey)) { return 'mult' }
    else if (time.includes(subKey)) { return 'time' }
    else                            { return 'text' }
    **/
  };

  /**
   * [strgToObjc description]
   * @type {[type]}
   */
  let strgToObjc= (strg: any) => {
    if (typeof strg !== 'string') {
      throw Error(`strgToObjc: bad strg -> ${strg}`);
    } else {
      let list = strg.split(", ");
      return {
        id:   Number(list[0]),
        text: list[1],
      }
    }
  };

  /**
   * [for description]
   * @param {[type]} var key in data [description]
   */
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      /**  Ingredients  **/
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
      /**  Instructions  **/
      else if (key === 'instructions') {
        // first step not empty like ''
        if(data['instructions'][0]['step'].length > 0) {
           resp['instructions'] = data['instructions'];
        }
      } 
      /**  Shema Values  **/
      else if (key === 'shema') {
        for(var subKey in data['shema']) {
          /**
           * WTF is dshs ??? Rename
           **/
          let dshs = data['shema'][subKey];
          if (dshs) {
            let tipe = shemaType(subKey);
            /**
             * @param tipe is Dropdown
             **/
            if (tipe === 'drop') {
              resp['shema'][subKey] = strgToObjc(dshs);
            }
            /**
             * @param tipe is Multiple value
             **/
            else if(tipe === 'mult') {
              let tempList = dshs.map((val) => {
                return strgToObjc(val);
              });
              resp['shema'][subKey] = tempList;
            }
            /**
             * @param tipe is prepTime or cookTime
             **/
            else if(tipe === 'time') {
              let someTime = dshs.split(":");
              resp['shema'][subKey] = {
                iso:  `PT${someTime[0]}H${someTime[1]}M`,
                text: `${someTime[0]}:${someTime[1]}`
              }
            }
            /**@param tipe is Text **/
            else { 
              resp['shema'][subKey] = dshs;
            }
          }
        }
      }
      /**  Image URL  **/
      else if (key === 'image') {
        resp[key] = `${data[key]}`;
      }
      /**  MetaData  **/
      else {
        /**  data[key].length > 0  **/
        if (data[key]) { resp[key] = data[key]; }
      }

    }
  }
  return resp;
}
