$(document).ready(function() {
  var newDie = new Die;
  $('#roller button.add').on('click', newDie.addDie);

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      newDie.roll();
      newDie.changeValue($(die),newDie.value);
    });
  });
});

// //initialize the value as starting at 0
function Die() {
  this.value = 0;
}

Die.prototype.roll = function(){
  this.value = Math.floor((Math.random()*6)+1);
};

Die.prototype.changeValue = function(die,value){
  die.text(value);
};

Die.prototype.addDie = function(){
  $('.dice').append('<div class="die">0</div>');
};
