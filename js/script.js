$(document).ready(function() {
		
	function runFizzBuzz(int) {
		//make sure that user's choice is a valid number				
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
	};
	
	$('button').click(function() {
		var userInput = parseFloat($('input').val());
		
		if (userInput % 1 == 0 || userInput < 1) {
			runFizzBuzz(userInput)
		} else {
			alert('Please select a valid number');
		}		
	});
});
