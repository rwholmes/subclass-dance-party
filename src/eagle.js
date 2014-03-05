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
  if ((this.$node.stepCounter === 0) || (this.$node.stepCounter === 2)){
    // fly right
    this.$node.addClass('fly-right').removeClass('fly-left');
    window.birdsOfPrey.push(this.$node[0]);
  }
  else if ((this.$node.stepCounter === 1) || (this.$node.stepCounter === 3)){
    this.$node.removeClass('fly-right').addClass('fly-left');
  }
  else if ((this.$node.stepCounter === 4)) {
    this.$node.removeClass('fly-left').addClass('fly-down');
    console.log(window.birdsOfPrey);
  }
  else if ((this.$node.stepCounter === 5)) {
    this.$node.removeClass('fly-down').addClass('fly-up');
  } else if (this.$node.stepCounter > 5) {
    this.$node.remove();
  }
  //count++;
  this.$node.stepCounter++;
};



