//alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

// User click button
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log("User clicked:", userClickedPattern);
});

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
