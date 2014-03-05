var Eagle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 0, left, 2000);
  this.$node.addClass('eagle');
};

Eagle.prototype = Object.create(Dancer.prototype);
Eagle.prototype.constructor  = Eagle;

Eagle.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.stepCounter = this.$node.stepCounter || 0;
  var count = this.$node.stepCounter;

  if (count === 0 || count === 2){
    this.$node.addClass('fly-right').removeClass('fly-left');
  }
  else if (count === 1 || count === 3){
    this.$node.removeClass('fly-right').addClass('fly-left');
  }
  else if (count === 4) {
    this.$node.removeClass('fly-left').addClass('fly-down');
  }
  else if (count === 5) {
    this.$node.removeClass('fly-down').addClass('fly-up');
  } else if (count > 5) {
    this.$node.remove();
  }

  this.$node.stepCounter++;
};



