import { strongPassword, isValidName, onlyNumbers, isPhoneNumber, isValidEmail, isvalidUrl } from './regexs.js';

const checkValidName = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a name.';
    response.success = false;
  }

  if (!isValidName.test(text)) {
    response.message = 'The name must only contain letters.';
    response.success = false;
  }
  return response;
};

const checkValidLastName = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a lastname.';
    response.success = false;
  }

  if (!isValidName.test(text)) {
    response.message = 'The lastname must only contain letters.';
    response.success = false;
  }
  return response;
}

const checkValidAge = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an age.';
    response.success = false;
  }

  if (!(text >= 18 && text <= 40)) {
    response.message = 'Age has to be between 18 and 40.';
    response.success = false;
  }

  if (!onlyNumbers.test(text)) {
    response.message = 'Invalid age.';
    response.success = false;
  }
  return response;
}

const checkPhone = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a phone.';
    response.success = false;
  }

  if (!isPhoneNumber.test) {
    response.message = 'You must provide a valid phone.';
    response.success = false;
  }
  return response;
}

const checkUrl = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an URL.';
    response.success = false;
  }

  if (!isvalidUrl.test(text)) {
    response.message = 'You must provide a valid URL.';
    response.success = false;
  }
  return response;
}

const checkEmail = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide an email.';
    response.success = false;
  }

  if (!isValidEmail.test(text)) {
    response.message = 'You must provide a valid email.';
    response.success = false;
  }
  return response;
}

const checkPassword = text => {
  let response = {};
  response.success = true;

  if (!text) {
    response.message = 'You must provide a password.';
    response.success = false;
  }

  if (!strongPassword.test(text)) {
    response.message = 'The password must contain at least 1 lowercase character, 1 uppercase caracter, 1 numeric character and must be 8 characters or longer.';
    response.success = false;
  }
  return response;
}

const checkPasswordMatch = (text1,text2) => {
  let response = {};
  response.success = true;

  if (!text2) {
    response.message = 'You must repeat the password.';
    response.success = false;
  }

  if (text1 !== text2) {
    response.message = 'Password doesn\'t match.';
    response.success = false;
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