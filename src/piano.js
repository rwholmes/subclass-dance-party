var Piano = function(top, left, timeBetweenSteps) {
  Dancer.call(this, 0, left, 3000);
  this.$node.addClass('piano');
  $('.piano-button').css({'visibility': 'visible'});
};
Piano.prototype = Object.create(Dancer.prototype);
Piano.prototype.constructor  = Piano;

Piano.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({top: '650px', left: '70%'},2000);
};
