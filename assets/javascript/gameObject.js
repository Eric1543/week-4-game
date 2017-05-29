$(document).ready(function(){

	// Set Game variables
	var crystalGame = {
		wins: 0,
		losses: 0,
		goal: 0,
		score: 0,
		crystal1: 0,
		crystal2: 0,
		crystal3: 0,
		crystal4: 0,
		// Sound elements
		winSound: document.createElement('audio'),
		loseSound: document.createElement('audio'),
		collectCrystal: document.createElement('audio'),

		// Set sound location
		setSounds: function(){
			winSound.setAttribute('src', 'assets/audio/win.mp3');
			loseSound.setAttribute('src', 'assets/audio/loss.mp3');
			collectCrystal.setAttribute('src', 'assets/audio/collectCrystal.wav');
		},

		// New random goal number
		newGoal: function(){
			goal = 19 + Math.floor(Math.random() * 102);
		},

		// Give crystals random value
		setCrystals: function(){
			crystal1 = Math.floor(Math.random() * 12 + 1);
			crystal2 = Math.floor(Math.random() * 12 + 1);
			crystal3 = Math.floor(Math.random() * 12 + 1);
			crystal4 = Math.floor(Math.random() * 12 + 1);
		},

		// Start and reset the game
		newGame: function(){
			this.newGoal();
			this.setCrystals();
			this.setSounds();
		},

		// Display Status
		startGameStatus: function(){
			$('#winsNum').html(crystalGame.wins);
			$('#lossesNum').html(crystalGame.losses);
			$('#goalNum').html(crystalGame.goal);
			$('#scoreNum').html(crystalGame.score);
		}

	};

	// Start game conditions
	crystalGame.newGame();
	console.log(goal);
	crystalGame.startGameStatus();





	$('#redCrystal').on('click', function(){
		crystalGame.score+=crystal1;
		crystalGame.collectCrystal.play();
		$('#scoreNum').html(crystalGame.score);

		if(crystalGame.score===crystalGame.goal){
			crystalGame.wins++;
			crystalGame.winSound.play();


		}
	});


});