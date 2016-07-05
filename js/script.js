$(document).ready(function() {

	$('button').click(function runFizzBuzz(int) {

		int = parseFloat($('input').val());
		
		function validateUserInput() {
			//make sure that user's choice is a valid number
			if (int <= 0 || int % 1 != 0) {
				return false 
			} else {
				return true;
			}
		};

		/**Runs FizzBuzz IF userInput is valid; 
		*otherwise tells user to enter valid number*/
		if (validateUserInput() == true) {
			for(var i = 1; i <= int; i++) {
				if (i % 15 == 0) { 
					$('body').append('FIZZBUZZ <br />');
				} else if (i % 3 == 0) {
					$('body').append('FIZZ <br />');
				} else if (i % 5 == 0) {
					$('body').append('BUZZ <br />');
				} else {
					$('body').append(i + '<br />');
				}
			};

		} else {
			alert('Please choose a valid number');
		};

		//Resets the user input value
		$('input').val('');
	});

})