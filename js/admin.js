$(document).ready(function() {
    if (typeof(localStorage) === 'undefined' ) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
		
        getItems(); 
    }
});
	
var getItems = function() {
	var timeLog, logLength, i;				
    i = 0;
    logLength = parseInt(localStorage.counter);
	timeLog = '';

    //now we are going to loop through each item in the database
    for (i = 0; i < logLength; i++) {
		var value, firstname, email, pwd;
        //lets setup some variables for the key and values

        if(logLength == i-1){
			var id = 'counter'+i;

			var value = JSON.parse(localStorage.getItem(id));

			email = value.email;
	        firstname = value.fname;
	        pwd = value.password;
	        

	        //now that we have the item, lets add it to the table
	        timeLog += '<tr id="'+id+'" class="tableRow"><td>'+email+'</td><td>'+firstname+'</td><td>'+pwd+'</td></tr>';
        }
    }

    $("#theLog").append(timeLog); //update the table with the list items
	
}