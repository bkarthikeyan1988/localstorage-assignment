$(document).ready(function() {
	if (!window.localStorage) {
	    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
	} else {
		// Sign Up
		if(!localStorage.getItem('counter')){
			localStorage.setItem('counter', 0);
		}
		
		counter = parseInt(localStorage.counter);

	    $("#submit_return_form_button").click(function(){
			setAllItems(counter);
	    });		
	
	}
});

var setAllItems = function(counter){
	var itemId, formSave;
	//newDate = new Date();
    itemId = "counter"+counter;
	formSave = {
		fname		: $("input[name='name']").val(),
		email 		: $("input[name='email']").val(),
		password	: $("input[name='password']").val()
	};

	
	var tempArray = [];
	
	if(counter){
		for(var i=0; i < counter; i++){
			var id = 'counter'+i;
			var email = JSON.parse(localStorage.getItem(id)).email;

			tempArray.push(email);
		}
	}

	if($.inArray(formSave.email, tempArray) == -1){
		counter++;
		localStorage.setItem('counter', counter);
		localStorage.setItem( itemId, JSON.stringify(formSave));
		//location.href = "www.yoursite.com";
	}else{
		alert("Email Already Exists");
	}
};
