'use strict';

import { 
  strongPassword, 
  isValidName, 
  onlyNumbers, 
  isPhoneNumber, 
  isValidEmail, 
  isvalidUrl 
} from './regexs.js';

const checkValidName = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a name.';
    response.success = false;
    return response;
  }

  if (!isValidName.test(text)) {
    response.message = 'The name must start with capital letter and only contain letters.';
    response.success = false;
    return response;
  }

  return response;
};

const checkValidLastName = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a lastname.';
    response.success = false;
    return response;
  }

  if (!isValidName.test(text)) {
    response.message = 'The lastname must start with capital letter and only contain letters.';
    response.success = false;
    return response;
  }
  return response;
}

const checkValidAge = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an age.';
    response.success = false;
    return response;
  }

  if (!(text >= 1 && text <= 40)) {
    response.message = 'Age has to be between 1 and 40.';
    response.success = false;
    return response;
  }

  if (!onlyNumbers.test(text)) {
    response.message = 'Invalid age. Age must be a number.';
    response.success = false;
    return response;
  }

  return response;
}

const checkPhone = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a phone.';
    response.success = false;
    return response;
  }

  if (!isPhoneNumber.test(text)) {
    response.message = 'You must provide a valid phone, format: xxxx-xxxx.';
    response.success = false;
    return response;
  }

  return response;
}

const checkUrl = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an URL.';
    response.success = false;
    return response;
  }

  if (!isvalidUrl.test(text)) {
    response.message = 'You must provide a valid URL.';
    response.success = false;
    return response;
  }

  return response;
}

const checkEmail = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an email.';
    response.success = false;
    return response;
  }

  if (!isValidEmail.test(text)) {
    response.message = 'You must provide a valid email.';
    response.success = false;
    return response;
  }

  return response;
}

const checkPassword = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a password.';
    response.success = false;
    return response;
  }

  if (!strongPassword.test(text)) {
    response.message = 'The password must contain at least 1 lowercase character, 1 uppercase caracter, 1 numeric character and must be 8 characters or longer.';
    response.success = false;
    return response;
  }

  return response;
}

const checkPasswordMatch = (text1, text2 ) => {
  let response = {};
  response.success = true;

  if (!text2) {
    response.message = 'You must repeat the password.';
    response.success = false;
    return response;
  }

  if (text1 !== text2) {
    response.message = 'Password doesn\'t match.';
    response.success = false;
    return response;
  }

  return response;
}

export {
  checkValidName,
  checkValidLastName,
  checkValidAge,
  checkPhone,
  checkUrl,
  checkEmail,
  checkPassword,
  checkPasswordMatch
};