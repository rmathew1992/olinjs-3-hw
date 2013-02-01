var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

var Ingredient = mongoose.Schema({
  name: String,
  cost: Number
});

exports.Ingredient = Ingredient;

