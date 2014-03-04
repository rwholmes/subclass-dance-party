var Eagle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 0, left, 2000);
  this.$node.addClass('eagle');
};
Eagle.prototype = Object.create(Dancer.prototype);
Eagle.prototype.constructor  = Eagle;

Eagle.prototype.step = function() {
  //var count = this.$node.stepCounter;
  Dancer.prototype.step.call(this);
  this.$node.stepCounter = this.$node.stepCounter || 0;
  this.$node.animate({left: '30%'},2000);
  //console.log(count);
  console.log(this.$node.stepCounter);
  if ((this.$node.stepCounter === 0) || (this.$node.stepCounter === 2) || (this.$node.stepCounter === 4)){
    // fly right
    this.$node.addClass('fly-right').removeClass('fly-left');
  }
  else if ((this.$node.stepCounter === 1) || (this.$node.stepCounter === 3)){
    this.$node.removeClass('fly-right').addClass('fly-left');
  }
  else if ((this.$node.stepCounter === 5)) {
    // fly down
  }
  else if ((this.$node.stepCounter === 6)) {
    // fly up
  }
  //count++;
  this.$node.stepCounter++;
};

