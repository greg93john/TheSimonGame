var gamePattern = [];
var userClickPattern = [];
var buttonColors = ["red","blue","green","yellow"];

$(".gamebtn").click(function(){
  selectionHandler($(this).attr('id'));
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
    gamePattern.push(randomChosenColor);
}

function selectionHandler(selection) {
  var userChosenColor = selection;
  console.log(userChosenColor);
  userClickPattern.push(userChosenColor);
}
