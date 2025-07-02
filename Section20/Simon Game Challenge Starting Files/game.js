//alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

// User click button
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log("User clicked:", userClickedPattern);
  //when user clicked, play sound
  playSound(userChosenColour);
});

//play sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//system random colour
function nextSequence() {
  //random from 0-3
  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randonNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}
