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
  console.log('Somebody just came to RR');
  next();
});

RR.get('/', (req, res) => {
  Recipe.find({}, (err, docs) => {
    if (err) { console.log(err.message); }
    else     { res.send(docs); }
  });
});

RR.get('/:rid', (req, res) => {
  var rid = Number(req.params.rid);
  Recipe.findOne({'rid': rid}, (err, doc) => {
    if (err) { console.log(err.message); }
    else     { res.json(doc); }
  });
});

RR.post('/', (req, res) => {

  let reqRec = JSON.parse(req.body.data)['resp'];
  let recipe = new Recipe(reqRec);
  // recipe['rid'] = 1751;
  console.log(`RR.post: ${reqRec.name}`);

  recipe.save( (err) => {
    if (err) { res.json({ "Error": err }) }
    else     { res.json({ "Saved": reqRec }) }
  });

});

module.exports = RR;
