$(document).ready(function(){

	// Set game variables
	var ranNum = 19 + Math.floor(Math.random() * 102);
	var score = 0;
	var wins = 0;
	var losses = 0;
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;

	// Display them
	$('#winsNum').html(wins);
	$('#lossesNum').html(losses);
	$('#goalNum').html(ranNum);
	$('#scoreNum').html(score);

	//Images obtained from pixabay.com

	// Sets sound effects - audio clips from zapsplat.com
	var winSound = document.createElement("audio");
	winSound.setAttribute("src", "assets/audio/win.mp3");
	var lossSound = document.createElement("audio");
	lossSound.setAttribute("src", "assets/audio/loss.mp3");
	var collectCrystal = document.createElement("audio");
	collectCrystal.setAttribute("src", "assets/audio/collectCrystal.wav");


	// Set each crystal value when called
	var crystalVal = function(){
		crystal1 = Math.floor(Math.random() * 12 + 1);
		crystal2 = Math.floor(Math.random() * 12 + 1);
		crystal3 = Math.floor(Math.random() * 12 + 1);
		crystal4 = Math.floor(Math.random() * 12 + 1);
	};

	// Function to reset game variables when game is won or lost
	var restart = function(){
		ranNum = 19 + Math.floor(Math.random() * 102);
		$('#goalNum').html(ranNum);
		score = 0;
		$('#scoreNum').html(score);
		crystalVal();
	}

	// Play if game won
	var winFunction = function(){
		wins++;
		$('#winsNum').html(wins);
		winSound.play();
		restart();
	}

	// Play if game lost
	var loseFunction = function(){
		losses++;
		$('#lossesNum').html(losses);
		lossSound.play();
		restart();
	}

	// ************************************************
	// Start game 
	// ************************************************
	// Set crystal values
	// Update score as user clicks (collects) crystals
	// Check if game won or lost with each click
	// ************************************************

	crystalVal();

	$('#redCrystal').on('click', function(){
		score+=crystal1;
		$('#scoreNum').html(score);
		collectCrystal.play();

		// Check if game won
		if(score === ranNum){
			winFunction();
		}
		else if(score>ranNum){
			lossFunction();
		}
	});
	$('#blueCrystal').on('click', function(){
		score+=crystal2;
		$('#scoreNum').html(score);
		collectCrystal.play();

		// Check if game won
		if(score === ranNum){
			winFunction();
		}
		else if(score>ranNum){
			lossFunction();
		}
	});
	$('#greenCrystal').on('click', function(){
		score+=crystal3;
		$('#scoreNum').html(score);
		collectCrystal.play();

		// Check if game won
		if(score === ranNum){
			winFunction();
		}
		else if(score>ranNum){
			lossFunction();
		}
	});
	$('#purpleCrystal').on('click', function(){
		score+=crystal4;
		$('#scoreNum').html(score);
		console.log(score);
		collectCrystal.play();

		// Check if game won
		if(score === ranNum){
			winFunction();
		}
		else if(score>ranNum){
			lossFunction();
		}
	});
});