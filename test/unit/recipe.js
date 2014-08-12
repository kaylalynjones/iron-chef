/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Recipe    = require('../../app/models/recipe'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'chef';

describe('Recipe', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Recipe object', function(){
      var r = {name:'Roasted Zuchini', img:'http://images.media-allrecipes.com/userphotos/250x250/01/05/02/1050232.jpg', ingredients:['Zuchinis','Italian Style Salad Dressing'], directions:'Slice zucchini into 1/4 inch slices. Toss in a bowl with Italian dressing.Place on a hot grill and grill about 4 to 5 minutes or until nice grill marks appear and the zucchini is slightly limp. Serve and enjoy.'};
      r = new Recipe(r);
      expect(r).to.be.instanceof(Recipe);
    });
  });

  describe('.all', function(){
    it('should get all the recipes', function(done){
      Recipe.all(function(err, recipes){
        expect(recipes).to.have.length(4);
        done();
      });
    });
  });
});
