$(document).ready(function () {

  // Gobal function to generate a random number

  function generateRandNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // random number between 19-120 to match
  var numberToMatch = generateRandNum(19, 120);
  //random number display on screen
  $("#numberToMatch").text(numberToMatch);

  // random number between 1-12 for the crystals

  var num1 = generateRandNum(1, 12);
  var num2 = generateRandNum(1, 12);
  var num3 = generateRandNum(1, 12);
  var num4 = generateRandNum(1, 12);


  //Adding random number to crystals
  $("#crystal1").attr("data-jewelValue", num1);

  $("#crystal2").attr("data-jewelValue", num2);

  $("#crystal3").attr("data-jewelValue", num3);

  $("#crystal4").attr("data-jewelValue", num4);


  $('.jewel').on("click", function () {
      total = total + parseInt($(this).attr("data-jewelValue"))||0;
      console.log("New total= " + total);
      $('#total').text(total);
      //Wins & Losses
      if (total === numberToMatch) {
          winDeclare();
      } else if (total > numberToMatch) {
          loserDeclare();
      }
  })


  // wins and losses tracking
  var total = 0;
  var wins = 0;
  var losses = 0;
  // wins and losses display on screen
  $("#counterWins").text(wins);
  $("#counterLosses").text(losses);

  //resets the game
  function reset() {
      numberToMatch = generateRandNum(19, 120);
      $("#numberToMatch").text(numberToMatch);
      $("#crystal1").attr("data-jewelValue", generateRandNum(1, 12));

      $("#crystal2").attr("data-jewelValue", generateRandNum(1, 12));

      $("#crystal3").attr("data-jewelValue", generateRandNum(1, 12));

      $("#crystal4").attr("data-jewelValue", generateRandNum(1, 12));
      total = 0;
      $("#total").text(total);
  }

  //Total Wins
  function winDeclare() {
      alert("You won!");
      wins++;
      $('#counterWins').text(wins);
      reset();
  }

  $('<script>achors.add();</script>').remove();
  //Total Losses
  function loserDeclare() {
      alert("You lose!");
      losses++;
      $('#counterLosses').text(losses);
      reset()
  }

});