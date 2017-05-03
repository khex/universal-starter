var express  = require('express');
var mongoose = require('mongoose');
var Recipe   = require('./recipe-model');
var RR       = express.Router();

/***********************
**    MLAB TESTING    **
************************/
let uri = 'mongodb://khex:qwerty@ds145128.mlab.com:45128/legubase';
mongoose.connect(uri, (err) => {
  if (err) { console.log(err.message); }
  else     { console.log('Connected to MongoDb'); }
});

RR.use((req, res, next) => {
  console.log('Somebody just came to RecipeRoute');
  next();
});

/********************
**    READ MANY    **
********************/
RR.get('/', (req, res) => {

  /** Old Style from Header **/
  //  let prms = JSON.parse(req.get('Body'))['params'];
  //  let page = Number(prms.page);
  //  let amnt = Number(prms.amount);

  let page = Number(req.query.page);
  let amnt = Number(req.query.amount);
  let skip = (page === 1) ? 0 : (page - 1) * amnt;
  console.log(`Original URL: ${req.originalUrl}`);
  console.log(`Mongoose skip: ${skip}, limit: ${amnt}`);

  Recipe.find()
    .sort({"rid": -1})
    .skip(skip)
    .limit(amnt)
    .exec((err, docs) => {
      if (err) throw err;
      res.send(docs);
    });

});

/*******************
**    READ ONE    **
*******************/
RR.get('/:rid', (req, res) => {
  let rid = Number(req.params.rid);
  Recipe.findOne({'rid': rid}, (err, doc) => {
    if (err) { console.log(err.message); }
    else     { res.json(doc); }
  });
});

/*******************
**    POST ONE    **
*******************/
RR.post('/', (req, res) => {

  let reqRec = JSON.parse(req.body.data)['resp'];
  let recipe = new Recipe(reqRec);

  Recipe
    .findOne()
    .sort({"rid": -1})
    .select({"rid": 1, "_id": 0})
    .exec((err, doc) => {   
      if (err) throw err;

      let rid = doc['rid'] + 1;
      recipe['rid'] = rid;
      //recipe['image'] = `assets/images/rid_${rid}.jpg`;

      recipe.save((err) => {
        if (err) { res.json({ "Error": err }) }
        else     { res.json({ "Saved": reqRec }) }
    });
  });
});

/********************
**    READ MANY    **
********************/
RR.put('/:rid', (req, res) => {

  let rid = Number(req.params.rid);
  let rcp = JSON.parse(req.body.data)['resp'];
  //  'upsert' creates the object if it doesn't exist.
  let opt = {upsert: false};
  
  Recipe.findOneAndUpdate({'rid': rid}, rcp, opt, (err, doc) => {
    if (err) { console.log(err.message); }
    else     { res.json(doc); }
  });
});

module.exports = RR;
