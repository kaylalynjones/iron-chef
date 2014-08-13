'use strict';

function Recipe(obj){
  this.name        = obj.name;
  this.img         = obj.img;
  this.ingredients = obj.ingredients.split(',').map(function(i){return i.trim();});
  this.directions  = obj.directions;
  this.created     = new Date();
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.all = function(cb){
  Recipe.collection.find().sort({created: -1}).toArray(cb);
};


Recipe.create = function(obj, cb){
  var recipe = new Recipe(obj);
  Recipe.collection.save(recipe, cb);
};

module.exports = Recipe;
