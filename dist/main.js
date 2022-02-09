// catch form submission & all inputs
const form = document.querySelector('.form-action');
const inputs = document.querySelectorAll('.form-control');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// loop through all inputs
	inputs.forEach((input) => {
		if (!input.value) {
			input.parentElement.classList.add('error');
		} else if (input.type == 'text') {
			if (validateNames(input.value)) {
				input.parentElement.classList.remove('error');
			} else {
				input.parentElement.classList.add('error');
			}
		} else if (input.type == 'password') {
			if (validatePassword(input.value)) {
				input.parentElement.classList.remove('error');
			} else {
				input.parentElement.classList.add('error');
			}
		} else {
			input.parentElement.classList.remove('error');
			if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
				} else {
					input.parentElement.classList.add('error');
				}
			}
		}
	});
});

//fuctions to validate inputs
const validateEmail = (email) => {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};
const validateNames = (fullname) => {
	const regex = /^[a-zA-Z]{5,10}$/;
	return regex.test(fullname);
};
const validatePassword = (password) => {
	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}/;
	return regex.test(password);
	// 	(           # Start of group
	//   (?=.*\d)      #   must contains one digit from 0-9
	//   (?=.*[a-z])       #   must contains one lowercase characters
	//   (?=.*[\W])        #   must contains at least one special character
	//               .     #     match anything with previous condition checking
	//                 {8,20}  #        length at least 8 characters and maximum of 20
	// )           # End of group
	// by example: Password@1996
};
