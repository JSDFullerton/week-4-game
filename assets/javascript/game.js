
// DEFINING GLOBAL VARIABLES
	bankAccount = 0;
	var wins = 0;
	var losses = 0;



// RANDOM BILL NUMBER
	var cleaningBill = Math.floor((Math.random() * 120) + 19);

	console.log("Cleaning Bill: " + cleaningBill);



// RANDOM GEM NUMBER
	var gems = ["ruby","emerald","saphire","diamond"]
	var gemsValues = {};

	for (var i = 0; i < gems.length; i++) {
			gemsValues[gems[i]] = Math.floor((Math.random() * 12) + 1);
	}

	console.log(gemsValues);






// GLOBAL FUNCTIONS & GAME RESET (Bill & Gem values reset)

	function gameReset  () {

		// RANDOM BILL NUMBER
		var cleaningBill = Math.floor((Math.random() * 120) + 19);

		console.log("Cleaning Bill: " + cleaningBill);

		// RANDOM GEM NUMBER
		var gems = ["ruby","emerald","saphire","diamond"]
		var gemsValues = {};

		for (var i = 0; i < gems.length; i++) {
			gemsValues[gems[i]] = Math.floor((Math.random() * 120) + 19);
		}

		console.log(gemsValues);
	}



// SCOREBOARD & CLEANING BILL HTML DISPLAY
	$(".scoreboard").append("<br>" + "<p> Wins: " + wins + "<p> Losses: " + losses);
	$(".bank_value").append("<br>" + "<p> CLEANING BILL: " + cleaningBill);


	

// CAPTURE USER GEM CLICK & BANKACCT CONSOLE LOG

			$("#ruby").on("click", function () {
				bankAccount = bankAccount + gemsValues["ruby"];
				console.log("Ruby Gold: " + gemsValues["ruby"]);
				console.log("Bank Account: " + bankAccount);
				$(".bank_value").html("<p> CLEANING BILL: " + cleaningBill + "<p> BANK ACCOUNT: " + bankAccount);		


			})

			$("#emerald").on("click", function () {
				bankAccount = bankAccount + gemsValues["emerald"];
				console.log("Emerald Gold: " + gemsValues["emerald"]);
				console.log("Bank Account: " + bankAccount);
				$(".bank_value").html("<p> CLEANING BILL: " + cleaningBill + "<p> BANK ACCOUNT: " + bankAccount);
		
		

			})

			$("#saphire").on("click", function () {
				bankAccount = bankAccount + gemsValues["saphire"];
				console.log("Saphire Gold: " + gemsValues["saphire"]);
				console.log("Bank Account: " + bankAccount);
				$(".bank_value").html("<p> CLEANING BILL: " + cleaningBill + "<p> BANK ACCOUNT: " + bankAccount);
		

			})

			$("#diamond").on("click", function () {
				bankAccount = bankAccount + gemsValues["diamond"];
				console.log("Diamond Gold: " + gemsValues["diamond"]);
				console.log("Bank Account: " + bankAccount);
				$(".bank_value").html("<p> CLEANING BILL: " + cleaningBill + "<p> BANK ACCOUNT: " + bankAccount);
			
		
			})



// IF FUNCTIONS FOR WIN/LOSS

	if(bankAccount == cleaningBill) {
		
		console.log("GAME WON");
		alert("YOU'VE GOT ENOUGH GOLD!");
		gameReset ();
	}

	if(bankAccount > cleaningBill) {
		console.log("GAME LOST");
		alert("What are you doing Dopey?...you're selling too many gems!!!");
		gameReset ();
	}






