var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  this.$node.toggle();
};


var TinyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 550, left, 3000);
  this.$node.addClass('tinyDancer');
};
TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor  = TinyDancer;

TinyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  that = this.$node;
  this.$node.animate({left: '30%'},2000);
  setTimeout(function() {
    $(".tinyDancer").animate({left: '50%'}, 800);
  }, 3000);

};

var FlyingSpears = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 32, left, 3000);
  this.$node.addClass('flyingSpears');
};
FlyingSpears.prototype = Object.create(Dancer.prototype);
FlyingSpears.prototype.constructor  = FlyingSpears;

FlyingSpears.prototype.step = function() {
  Dancer.prototype.step.call(this);
  that = this.$node;
  this.$node.animate({left: '30%'},2000);
  setTimeout(function() {
    $(".flyingSpears").animate({left: '50%'}, 800);
  }, 3000);

};





