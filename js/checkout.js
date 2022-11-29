/* (function() {
	'use strict';
	 window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		 form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		   else if (form.checkValidity() == true) {
			  $('#success').modal("show");
			  
			  // stop form submit only for demo
			  event.preventDefault();
		   }
		  form.classList.add('was-validated');
		 }, false);
	   });
	 }, false);
   })(); */



// Exercise 6
function validate(event) {
	
	event.preventDefault();
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");
	var errorPassword = document.getElementById("errorPassword");  
	var errorAddress = document.getElementById("errorAddress");
	var errorPhone = document.getElementById("errorPhone");    
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		fName.classList.add("is-invalid")
		error++;
	} 
	
	
	/* else if (fName.length<3) {  
		alert("Password must be at least 6 characters long.");  
		return false;  
	}   */

	if(fEmail.value == ""){
		error++;
	}
	 
	/* if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
 */
	/* if(error>0){
		return true;
	}else{
		return false;
	} 
 */
}

/* (() => {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
	  form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
		  event.preventDefault()
		  event.stopPropagation()
		}
  
		form.classList.add('was-validated')
	  }, false)
	})
  })() */