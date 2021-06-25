//[HTML OBJECTS]
const loadElements = () => {
  const frmSignIn = document.getElementById('frmSignIn');
  const txtName = document.getElementById('txtName');
  const txtLastName = document.getElementById('txtLastName');
  const txtAge = document.getElementById('txtAge');
  const txtPhone = document.getElementById('txtPhone');
  const txtWebSite = document.getElementById('txtWebSite');
  const rgnExperience = document.getElementById('rgnExperience');
  const spnExperience = document.getElementById('spnExperience');
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const txtRepeatPassword = document.getElementById('txtRepeatPassword');
  const chkTerms = document.getElementById('chkTerms');
  const btnSignin = document.getElementById('btnSignin');
  const msgName = document.getElementById('msgName');
  const msgLastName = document.getElementById('msgLastName');
  const msgAge = document.getElementById('msgAge');
  const msgPhone = document.getElementById('msgPhone');
  const msgWebSite = document.getElementById('msgWebSite');
  const msgEmail = document.getElementById('msgEmail');
  const msgPassword = document.getElementById('msgPassword');
  const msgRepeatPassword = document.getElementById('msgRepeatPassword');
  const msgTerms = document.getElementById('msgTerms');
  const backgroundShadow = document.getElementById('backgroundShadow');
  const gif = document.getElementById('gif');
  const btnShowPassword = document.getElementById('btnShowPassword');
  const passwordInputs = document.getElementsByClassName('show-item');
}

export { loadElements }