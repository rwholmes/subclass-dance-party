/* exported Dancer, top, left, timeBetweenSteps */
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
  var that = this.$node;
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
  this.$node.animate({left: '30%'},2000);
  setTimeout(function() {
    $(".flyingSpears").animate({left: '50%'}, 800);
  }, 3000);

};

var Moonwalker = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 680, left, 2300);
  this.$node.addClass('moonwalker');
  this.stepCount = 0;
};
Moonwalker.prototype = Object.create(Dancer.prototype);
Moonwalker.prototype.constructor  = Moonwalker;

Moonwalker.prototype.step = function() {
  this.stepCount++;
  console.log(this.stepCount);
  Dancer.prototype.step.call(this);
  if(this.stepCount%2 !== 0) {
    this.$node.addClass('walk-left').removeClass('walk-right');
    this.$node.animate({left:'1100px'}, 2300);
  } else {
    this.$node.addClass('walk-right').removeClass('walk-left');
    this.$node.animate({left:'200px'}, 2300);
  }
};


// .walk-right
// .walk-left
// keyframes for walking
// setTimeout that changes class at either side of the stage
// translate/animation function that matches up with setTimeout and keyframes











