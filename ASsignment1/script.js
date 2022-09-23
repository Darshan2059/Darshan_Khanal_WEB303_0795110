/*
	WEB 303 Assignment 1 - jQuery
	{Darshan Khanal}
*/

//using document ready function
$(document).ready(function(){  

//using keyup event
	$('input#yearly-salary, input#percent').on('keyup',function(){
		let num1 = $('input#yearly-salary').val();
        let num2 = $('input#percent').val();
		let result = ((num1 * num2)/100).toFixed(2) ;
	$('#amount').text('$' + result);
    });

	
	
});
