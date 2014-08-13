'use strict';

var Recipe = require('../models/recipe');

exports.index = function(req, res){
  Recipe.all(function(err, recipes){
    res.render('recipes/index', {recipes:recipes});
  });
};

exports.create = function(req,res){
  Recipe.create(req.body, function(err, response){
    console.log(response);
    res.render('recipes/recipe', {recipe:response});
  });
};

exports.destroy = function(req,res){
  Recipe.destroy(req.params.id, function(){
    res.send({id:req.params.id});
  });
};
