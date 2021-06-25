'use strict';
import './konamiCode.js';
import { strongPassword, isValidName, onlyNumbers, isPhoneNumber, isValidEmail, isvalidUrl } from './regexs.js';
import { loadElements } from './htmlElements.js';

//[VARIABLES]
let showPassword = false;

//[EVENTS]
btnSignin.addEventListener('click', e => {
  e.preventDefault();
  validateForm();
});

rgnExperience.addEventListener('change', e => {
  spnExperience.textContent = e.target.value;
});

btnShowPassword.addEventListener('click', function () {
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

/*FORM FUNCTIONS*/
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

const validateName = () => {
  if (!txtName.value) {
    showWarning(txtName, msgName, 'You must provide a name.');
    return false;
  }

  if (!isValidName.test(txtName.value)) {
    showWarning(txtName, msgName, 'The name must only contain letters.');
    return false;
  }

  clearWarning(txtName, msgName);
  return true;
};

const validateLastName = () => {
  if (!txtLastName.value) {
    showWarning(txtLastName, msgLastName, 'You must provide a lastname.');
    return false;
  }

  if (!isValidName.test(txtLastName.value)) {
    showWarning(txtLastName, msgLastName, 'The lastname must only contain letters.');
    return false;
  }

  clearWarning(txtLastName, msgLastName);
  return true;
};

const validateAge = () => {
  if (!txtAge.value) {
    showWarning(txtAge, msgAge, 'You must provide an age.');
    return false;
  }

  if (!(txtAge.value >= 18 && txtAge.value <= 40)) {
    showWarning(txtAge, msgAge, 'Age has to be between 18 and 40.');
    return false;
  }

  if (!onlyNumbers.test(txtAge.value)) {
    showWarning(txtAge, msgAge, 'Invalid age.');
    return false;
  }

  clearWarning(txtAge, msgAge);
  return true;
};

const validatePhone = () => {
  if (!txtPhone.value) {
    showWarning(txtPhone, msgPhone, 'You must provide a phone.');
    return false;
  }

  if (!isPhoneNumber.test(txtPhone.value)) {
    showWarning(txtPhone, msgPhone, 'You must provide a valid phone.');
    return false;
  }

  clearWarning(txtPhone, msgPhone);
  return true;
};

const validateWebSite = () => {
  if (!txtWebSite.value) {
    showWarning(txtWebSite, msgWebSite, 'You must provide an URL.');
    return false;
  }

  if (!isvalidUrl.test(txtWebSite.value)) {
    showWarning(txtWebSite, msgWebSite, 'You must provide a valid URL.');
    return false;
  }

  clearWarning(txtWebSite, msgWebSite);
  return true;
};

const validateEmail = () => {
  if (!txtEmail.value) {
    showWarning(txtEmail, msgEmail, 'You must provide an email.');
    return false;
  }

  if (!isValidEmail.test(txtEmail.value)) {
    showWarning(txtEmail, msgEmail, 'You must provide a valid email.');
    return false;
  }

  clearWarning(txtEmail, msgEmail);
  return true;
};

const validatePassword1 = () => {
  if (!txtPassword.value) {
    showWarning(txtPassword, msgPassword, 'You must provide a password.');
    return false;
  }

  if (!strongPassword.test(txtPassword.value)) {
    showWarning(txtPassword, msgPassword, 'The password must contain at least 1 lowercase character, 1 uppercase caracter, 1 numeric character and must be 8 characters or longer.');
    return false;
  }

  strongPassword;

  clearWarning(txtPassword, msgPassword);
  return true;
};

const validatePassword2 = () => {
  if (!txtRepeatPassword.value) {
    showWarning(txtRepeatPassword, msgRepeatPassword, 'You must repeat the password.');
    return false;
  }

  if (txtPassword.value !== txtRepeatPassword.value) {
    showWarning(txtRepeatPassword, msgRepeatPassword, 'Password doesn\'t match.');
    return false;
  }
  clearWarning(txtRepeatPassword, msgRepeatPassword);
  return true;
};

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

const clearWarning = (input, message) => {
  message.textContent = '';
  message.classList.add('d-none');
  input.classList.remove('invalid-input');
};

const showWarning = (input, message, text) => {
  message.textContent = text;
  message.classList.remove('d-none');
  input.classList.add('invalid-input');
};

//[SETTINGS]
frmSignIn.reset();
loadElements();