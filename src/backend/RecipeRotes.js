var express   = require('express');
var RR = express.Router();
var Recipe    = require('./RecipeModel');

RR.use((req, res, next) => {
  console.log('Somebody just came to RR');
  next();
});

RR.get('/api/recipes', (req, res) => {
  Recipe.find({}, (err, docs) => {
    if (err) { console.log(err.message); }
    else     { res.send(docs); }
  });
});

RR.get('/api/recipes/:rid', (req, res) => {
  var rid = Number(req.params.rid);
  Recipe.findOne({'rid': rid}, (err, doc) => {
    if (err) { console.log(err.message); }
    else     { res.json(doc); }
  });
});
