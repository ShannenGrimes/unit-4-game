$(document).ready(function () {
    // Random numbers for crystals
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    var randomNumber = Math.floor(Math.random() * 102 + 19);
    // Random number
    $("#compNum").text("Match this number: " + randomNumber);
    var result = 0;
    $("#userNum").text(result);       
    var wins = 0;
    $(".wins").text("Wins: " + wins)
    var losses = 0;
    $(".losses").text("Losses: " + losses);
    
    // Reset
    function populate() {
        if (result > compChoice)
        result = 0;
        $("#userNum").text(result);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        compChoice = Math.floor(Math.random() * 102 + 19);

        $("#compNum").text("Match this number: " + compChoice);
    }
    console.log()
    





});