'use strict';

const errorMessages = new Map();
errorMessages['txtName'] = document.getElementById('msgName');
errorMessages['txtLastName'] = document.getElementById('msgLastName');
errorMessages['txtAge'] = document.getElementById('msgAge');
errorMessages['txtPhone'] = document.getElementById('msgPhone');
errorMessages['txtWebSite'] = document.getElementById('msgWebSite');
errorMessages['txtEmail'] = document.getElementById('msgEmail');
errorMessages['txtPassword'] = document.getElementById('msgPassword');
errorMessages['txtPassword2'] = document.getElementById('msgPassword2');

export { errorMessages };