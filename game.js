var gamePattern = [];
var userClickPattern = [];
var buttonColors = ["red","blue","green","yellow"];

$(".gamebtn").click(function(){
  selectionHandler($(this).attr('id'));
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    selectionEffects(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

function selectionHandler(selection) {
  var userChosenColor = selection;
  console.log(userChosenColor);
  selectionEffects(userChosenColor);
  userClickPattern.push(userChosenColor);
}

function selectionEffects(color) {
  $("#"+color).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}
