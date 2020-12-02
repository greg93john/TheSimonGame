var gamePattern = [];
var userClickPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = -1;
var gameStarted = false;
var originalLevelTitle = $('#level-title').text();;

$(document).keypress(()=> {
  if(!gameStarted) {
    initalKeyPressHandler();
    $(".gamebtn").on('click',function(){selectionHandler($(this).attr('id'));});
    gameStarted = true;
  }
});

function initalKeyPressHandler(){
  nextSequence();
}

function nextSequence() {
    eraseUserClickPattern();
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    selectionEffect(randomChosenColor);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    level++;
    $('#level-title').text("level "+ level);
}

function selectionHandler(selection) {
  $(".gamebtn").off('click');
  var userChosenColor = selection;
  console.log(userChosenColor);
  animatePress(userChosenColor);
  userClickPattern.push(userChosenColor);
  var currentUserIndex = userClickPattern.length-1;
  if(checkAnswer(currentUserIndex)){
    playSound(userChosenColor);
    if(currentUserIndex === level){
      setTimeout(()=>{ nextSequence(); $(".gamebtn").on('click',function() {
        selectionHandler($(this).attr('id'));
      });}, 1000);
    } else{
      $(".gamebtn").on('click',function() {selectionHandler($(this).attr('id'));});
    }
  } else {
    handleFailure();
  }
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

function checkAnswer(indexNum) {
  if(userClickPattern[indexNum] === gamePattern[indexNum]){
    console.log("correct!");
    return true;
  } else {
    console.log("wrong!");
    return false;
  }
}

function handleFailure() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $('#level-title').text(originalLevelTitle);
  eraseUserClickPattern();
  eraseGamePattern();
  $(".gamebtn").off('click');
  level = -1;
  gameStarted = false;
}

function eraseUserClickPattern(){
  userClickPattern = [];
}

function eraseGamePattern(){
  gamePattern = [];
}
