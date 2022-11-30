
// Regular expressions

const letters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;
const lettersAndNumbers = /^[A-Za-z-0-9]+$/;
const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
	if (fName.value == "" || fName.value.length < 3 || !fName.value.match(letters)){
		fName.classList.add("is-invalid")
		error++;
	} else {
		fName.classList.remove("is-invalid")
		fName.classList.add("is-valid")
	}
	
	if (fLastN.value == "" || fLastN.value.length < 3 || !fLastN.value.match(letters)){
		fLastN.classList.add("is-invalid")
		error++;
	} else {
		fLastN.classList.remove("is-invalid")
		fLastN.classList.add("is-valid")
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !fEmail.value.match(email)){
		fEmail.classList.add("is-invalid")
		error++;
	} else {
		fEmail.classList.remove("is-invalid")
		fEmail.classList.add("is-valid")
	}
	 
	if (fPassword.value == "" || fPassword.value.length < 3){
		fPassword.classList.add("is-invalid")
		error++;
	} else if (!fPassword.value.match(lettersAndNumbers)) {
		fPassword.classList.add("is-invalid")
		error++;
	}
	else {
		fPassword.classList.remove("is-invalid")
		fPassword.classList.add("is-valid")
	}

	if (fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add("is-invalid")
		error++;
	} else {
		fAddress.classList.remove("is-invalid")
		fAddress.classList.add("is-valid")
	}

	if (fPhone.value == "" || fPhone.value.length < 3 || !numbers.test(fPhone.value)){
		fPhone.classList.add("is-invalid")
		error++;
	} else {
		fPhone.classList.remove("is-invalid")
		fPhone.classList.add("is-valid")
	}
	
	
	if(error>0){
		alert("Error en alguno de los campos");
	}else{
		alert("OK");
	}

}

