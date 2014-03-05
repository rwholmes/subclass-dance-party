var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineup = function() {
  this.$node.finish();
  this.$node.css({left: '100px'});
};


