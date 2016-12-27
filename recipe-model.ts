var mongoose = require('mongoose');
//  import { Document, Schema, Model } from 'mongoose';
//  import * as mongoose from 'mongoose';
//  var mongoose = require("mongoose");

/** github.com/Appsilon/styleguide/wiki/mongoose-typescript-models **/

interface IRecipe {
  name: string;
  image: string;
  description: string;
};

interface IRecipeModel extends IRecipe, mongoose.Document { }

var recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

//  import User = require("./User");
//  var user = new User({email: "user@appsilon.pl"});
//  user.save();
export let Recipe = mongoose.Model<IRecipeModel>("Recipe", recipeSchema);

//  var User = require('./app/models/user');
//  module.exports = mongoose.model('User', UserSchema);

//  https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//  https://github.com/Appsilon/styleguide/wiki/mongoose-typescript-models

/**
var mongoose = require('mongoose');

var catSchema = mongoose.Schema({ name: String });

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
**/