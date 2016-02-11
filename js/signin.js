$(document).ready(function() {
	if (!window.localStorage) {
	    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
	}
});

var checkSignIn = function(){
	var counter = parseInt(localStorage.counter);
	var email = $("#signInEmail").val();
	var password = $("#signInPassword").val();

	if(!email || !password){
		alert('Enter email and password');
	}else{
		var allowSignIn = checkEmailValidation();

		if(allowSignIn){
			if(!counter && counter != 0){
				alert('User not valid please sign up');
			}else{
				
				var allowUser = false;

				for(var i=0; i < counter; i++){
					var id = 'counter'+i;
					var passwordMismatch = false;
					var json = {
						"email"    : JSON.parse(localStorage.getItem(id)).email,
					    "password" : JSON.parse(localStorage.getItem(id)).password
					};

					if(json.email == email){
						if(json.password == password){
							allowUser = true;
						}else{
							alert('Please enter valid password to sign in');
							passwordMismatch = true;
							return;
						}
					}

					if((counter - 1) == i  && !allowUser && !passwordMismatch){
						alert('Please enter valid email to sign in');
					}
				}

				if(allowUser){
					alert('Successfully logged in');
				}

				// else{
				// 	alert('Failed to login check username or password');
				// }
			}
		}
	}
}

var checkEmailValidation = function(){

	return true;
}