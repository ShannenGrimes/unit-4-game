$(document).ready(function(){
  // Random numbers for crystals
  var crystal1 = Math.floor(Math.random() * 12 + 1);
  var crystal2 = Math.floor(Math.random() * 12 + 1);
  var crystal3 = Math.floor(Math.random() * 12 + 1);
  var crystal4 = Math.floor(Math.random() * 12 + 1);
  var randomNumber = Math.floor(Math.random() * 102 + 19);

  // Total that the user has
  $("#randomNumber").text("Match this number: " + randomNumber);
  var result = 0;
  // Adds to "wins"
  $("#userNumber").text(result);
  var wins = 0;
  $("#wins").text("Wins: " + wins);

  // Adds to losses
  var losses = 0;
  $("#losses").text("Losses: " + losses);

  // Reset for random number and also the crystals
  function winner() {
    wins++;
    $("#wins").text("Wins: + wins");
  }

  function loser() {
    losses++;
    $("#losses").text("losses: " + losses);
  }
//   console.log(wins);

  function populate() {
    if (result > randomNumber) result = 0;
    $("#userNumber").text(result);
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
    randomNumber = Math.floor(Math.random() * 102 + 19);

    $("#randomNumber").text("Match this number: " + randomNumber);
  }
  console.log(randomNumber);

  $(".crystal1").on("click", function() {
    result = result + crystal1;
    // console.log(result);
    $("#userNum").text(result);

    console.log(crystal1)

    if (result === randomNumber) {
      winner();
    } else if (result > randomNumber) {
      loser();
      populate();
    }
  });

  $("#button2").on("click", function() {
    result = result + crystal2;
    // console.log(result);
    $("#userNum").text(result);

    if (result === randomNumber) {
      winner();
    } else if (result > randomNumber) {
      loser();
      populate();
    }
  });

  $("#button3").on("click", function() {
    result = result + crystal3;
    // console.log(result);
    $("#userNum").text(result);

    if (result === randomNumber) {
      winner();
    } else if (result > randomNumber) {
      loser();
      populate();
    }
  });

  $("#button4").on("click", function() {
    result = result + crystal4;
    // console.log(result);
    $("#userNum").text(result);

    if (result === randomNumber) {
      winner();
    } else if (result > randomNumber) {
      loser();
      populate();
    }
  });
});
