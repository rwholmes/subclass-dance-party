var Moonwalker = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 650, left, 2300);
  this.$node.addClass('moonwalker');
  this.stepCount = 0;
};
Moonwalker.prototype = Object.create(Dancer.prototype);
Moonwalker.prototype.constructor  = Moonwalker;

Moonwalker.prototype.step = function() {
  this.stepCount++;
  Dancer.prototype.step.call(this);
  if(this.stepCount%2 !== 0) {
    this.$node.addClass('walk-left').removeClass('walk-right');
    this.$node.animate({left:'1000px'}, 2300);
  } else {
    this.$node.addClass('walk-right').removeClass('walk-left');
    this.$node.animate({left:'100px'}, 2300);
  }
};
