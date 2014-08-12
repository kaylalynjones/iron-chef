
'use strict';

function Recipe(obj){
  this.name       = obj.name;
  this.img        = obj.img;
  this.ingedients = obj.ingredients;
  this.directions = obj.directions;
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

//Person.all = function(cb){
  //Person.collection.find().toArray(cb);
//};

module.exports = Recipe;
