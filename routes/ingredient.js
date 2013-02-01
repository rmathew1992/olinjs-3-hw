
var models = require('../model')

exports.new = function(req, res){
  console.log("hey thar");
  res.render('ingredient',{title: 'Adding Ingredients'});
};

exports.create = function(req, res){
  var temp = req.body;
  var ingred = new models.Ingredient ({name: temp.Ingredient, cost: temp.cost});

  
  ingred.save(function(err){
  	console.log('saving');
  	if(err) return console.log("error", err);
    });

  res.send('Ingredient saved!');
  res.send(ingred.name);
};