/* exported Dancer, top, left, timeBetweenSteps */

var TinyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 550, left, 3000);
  this.$node.addClass('tinyDancer');
  this.$node.pianoFlag = false;
};

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor  = TinyDancer;

TinyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (!this.$node.pianoFlag){
    this.$node.animate({left: '30%'},2000);
    setTimeout(function() {
      $(".tinyDancer").animate({left: '50%'}, 800);
    }, 3000);
  } else {
    this.$node.animate({left: '70%'});
    this.$node.addClass('dancing');
  }
};

TinyDancer.prototype.goToPiano = function() {
  this.$node.pianoFlag = true;
  this.$node.finish();
  this.$node.animate({left: '75%', 'z-index': '0'},1000);
};













