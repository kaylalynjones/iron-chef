'use strict';

function Recipe(obj){
  this.name        = (obj.name.length > 0) ? obj.name : 'Awesome Sauce';
  this.img         = (obj.img.length > 0) ? obj.img : '/img/recipe_book.jpg';
  this.ingredients = (obj.ingredients.length > 2) ? obj.ingredients.split(',').map(function(i){return i.trim();}) : ['Awesome', 'Sauce', 'Salt', 'Pepper', 'Garlic', 'Onion Powder', 'Cayenne'];
  this.directions  = (obj.directions > 0) ? obj.directions : 'Mix it all together, and eat it!';
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
