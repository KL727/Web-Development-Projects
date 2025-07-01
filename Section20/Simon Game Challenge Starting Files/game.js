//alert("hello");
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  //random from 0-3
  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randonNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
