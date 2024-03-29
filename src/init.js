/* global $, window, console */
/* exported window, console, $ */

$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = $("#stage").height() * Math.random();
    var left = $("#stage").width() * Math.random();
    var timeBetweenSteps = Math.random() * 2000;

    var dancer = new dancerMakerFunction(top, left, timeBetweenSteps);
    window.dancers.push(dancer);
    $('#stage').append(dancer.$node);
  });

// Line-up button
  $(".lineUpButton").on("click", function(event){
    for(var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineup();
    };
  });

// Hover toggle on moonwalker
  $(".moonwalker").on("mouseover", function(){
    $(this).stop();
  });

  $('.piano-button').on('click', function(event){
    event.preventDefault();
    for (var i=0; i<window.dancers.length; i++){
      if (window.dancers[i].$node[0].classList.contains('tinyDancer')){
        $(this).toggle();
        window.dancers[i].goToPiano();
        return;
      }
    }
  });

});





