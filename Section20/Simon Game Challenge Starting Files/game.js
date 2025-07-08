//alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

var started = false; // Tracks whether the game has started
var level = 0; // Current game level

// Detect keypress to start the game
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// User click button
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //when user clicked, play sound
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
  console.log("User clicked:", userClickedPattern);
});

//play sounds based on the colour name
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Generate next sequence step, system random colour
function nextSequence() {
  userClickedPattern = []; // Reset user pattern for this level
  level++; // Increase level by 1
  $("#level-title").text("Level " + level); // Update title text

  //random from 0-3
  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randonNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  //apply button style
  $("#" + currentColour).addClass("pressed");
  //remove style after 100ms
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // Check if the user's most recent answer is correct
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    // If the user has completed the full sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Move to the next level
      }, 1000);
    }
  } else {
    // Step 1: Play wrong sound
    playSound("wrong");

    // Step 2: Flash red background
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Step 3: Change title
    $("#level-title").text("Game Over, Press Any Key to Restart");
  }
}
