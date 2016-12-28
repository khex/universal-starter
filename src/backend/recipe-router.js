var express   = require('express');
var Recipe    = require('./recipe-model');
var RR        = express.Router();

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

module.exports = RR;
