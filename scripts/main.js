'use strict';
import './konamiCode.js';
import './htmlElements.js';
import { errorMessages } from './errorsMessages.js';
import { checkValidName, checkValidLastName, checkValidAge, checkPhone, checkUrl, checkEmail, checkPassword, checkPasswordMatch } from './validations.js';

//[VARIABLES]
let showPassword = true;

//[EVENTS]
btnSignin.addEventListener('click', e => {
  e.preventDefault();
  validateForm();
});

rgnExperience.addEventListener('change', e => {
  spnExperience.textContent = e.target.value;
});

btnShowPassword.addEventListener('click', function () {
  let passwordInputs = document.getElementsByClassName('show-item');
  if (showPassword) {
    this.classList.add('show-password__active');
    for (let input of passwordInputs) input.type = 'text';
    showPassword = false;
  } else {
    this.classList.remove('show-password__active');
    for (let input of passwordInputs) input.type = 'password';
    showPassword = true;
  }
});

//[FUNCTIONS]

const validateForm = () => {
  let errors = [];
  errors.push(validateName());
  errors.push(validateLastName());
  errors.push(validateAge());
  errors.push(validatePhone());
  errors.push(validateWebSite());
  errors.push(validateEmail());
  errors.push(validatePassword1());
  errors.push(validatePassword2());
  errors.push(agreeTerms());
  console.clear();

  if (errors.includes(false)) {
    console.log('%c 🚨 Invalid submit', 'color:red');
    return;
  }

  showSubmittedData();
};

const validateName = () => handleError(checkValidName(txtName.value), txtName);

const validateLastName = () => handleError(checkValidLastName(txtLastName.value), txtLastName);

const validateAge = () => handleError(checkValidAge(txtAge.value), txtAge);

const validatePhone = () => handleError(checkPhone(txtPhone.value), txtPhone);

const validateWebSite = () => handleError(checkUrl(txtWebSite.value), txtWebSite);

const validateEmail = () => handleError(checkEmail(txtEmail.value), txtEmail);

const validatePassword1 = () => handleError(checkPassword(txtPassword.value), txtPassword);

const validatePassword2 = () => handleError(checkPasswordMatch(txtPassword.value, txtPassword2.value), txtPassword2);

const agreeTerms = () => {
  if (!chkTerms.checked) {
    msgTerms.textContent = 'You must agree terms and coditions.';
    msgTerms.classList.remove('d-none');
    return false;
  }

  msgTerms.textContent = '';
  msgTerms.classList.add('d-none');
  return true;
};

const showSubmittedData = () => {
  console.log('%c ✅ Successfull submit', 'color:green');
  console.table({
    'Name': txtName.value,
    'Last Name': txtLastName.value,
    'Age': txtAge.value,
    'Phone': txtPhone.value,
    'Website': txtWebSite.value,
    'Email': txtEmail.value,
    'Password': txtPassword.value,
    'Year\'s experience': rgnExperience.value,
  });
};

const handleError = (response, element) => {
  if(response.success){
    errorMessages[element.id].textContent = '';
    errorMessages[element.id].classList.add('d-none');
    element.classList.remove('invalid-input');
    return true;
  }

  errorMessages[element.id].textContent = response.message;
  errorMessages[element.id].classList.remove('d-none');
  element.classList.add('invalid-input');
  return false;
}

//[SETTINGS]
frmSignIn.reset();