var gamePattern = [];
var userClickPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = -1;
var gameStarted = false;

$(document).keypress(()=> {
  if(!gameStarted) {
    initalKeyPressHandler();
    gameStarted = true;
  }
});

$(".gamebtn").click(function(){
  selectionHandler($(this).attr('id'));
});

function initalKeyPressHandler(){
  nextSequence();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    selectionEffect(randomChosenColor);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    level++;
    $('#level-title').text("level "+ level);
}

function selectionHandler(selection) {
  var userChosenColor = selection;
  console.log(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickPattern.push(userChosenColor);
}

function selectionEffect(color) {
  $("#"+color).fadeOut(100).fadeIn(100);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");
  selectionEffect(currentColor);
  setTimeout(function(){$("#"+currentColor).removeClass("pressed");}, 100);
}
