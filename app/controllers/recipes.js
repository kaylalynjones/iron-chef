'use strict';

var Recipe = require('../models/recipe');

exports.index = function(req, res){
  Recipe.all(function(err, recipes){
    res.render('recipes/index', {recipes:recipes});
  });
};
