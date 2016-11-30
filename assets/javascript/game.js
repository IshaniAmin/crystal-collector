
// - there is a randomly generated number at the start of the game (which is the taget score)
// - 4 crystals represents a different number (but is hidden)
// - 4 crystals have a random number between 1 and 12
// - goal score is between 19 and 120
// - each time a crystal is clicked, those points are added to total score
// - goal: match total score to the random number generated
// - when our score matched random score, it says "you won" and adds 1 to the win counter
// - if it wins, then our number resets to 0 and game resets
// - if our number goes past goal score, then it saus "you lost" and adds 1 to losses counter and game resets
// - when game resets, there is a new random number and each crystal has a new random number (but wins and losses number do not change)
// -

$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var yourGuess = 0;
	var randomNum;

	var images = ['../week-4-game/assets/images/blue_gem.jpg', '../week-4-game/assets/images/green_gem.jpg', '../week-4-game/assets/images/pink_gem.jpg', '../week-4-game/assets/images/yellow_gem.jpg']


		for (var i = 0; i < images.length; i++) {
			var randomCrystalNumber = Math.floor(Math.random()*12+1);
    		var imageCrystal = $("<img>");
    		imageCrystal.addClass("crystalImage");
    		imageCrystal.attr("src", images[i]);
    		imageCrystal.attr("data-crystalvalue", randomCrystalNumber);
    		$("#crystalImg").append(imageCrystal);
		}


		function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function resetGame() {
			yourGuess = 0;
			$('#guessedScore').html('Your score: ' + yourGuess);
			randomNum = getRandomInt(19, 120);
			$('#randomNumber').html('Target number: ' + randomNum);
		}

		
		randomNum = getRandomInt(19, 120);
		$('#randomNumber').html('Target number: ' + randomNum);
		$('#guessedScore').html('Your score: ' + 0);


		$(".crystalImage").on("click", function() {
			var crystalvalue = $(this).data("crystalvalue");
			yourGuess += crystalvalue;
			$('#guessedScore').html('Your score: ' + yourGuess);


		if (yourGuess == randomNum) {
			$('#winOrLose').html("You won!!");
			wins++;
			$('#wins').text('Wins: ' + wins);
			resetGame()

		} else if (yourGuess > randomNum) {
			$('#winOrLose').html("You lost!!");
			losses++;
			$('#losses').text('Losses: ' + losses);
			resetGame()
		}	
		
		});


});