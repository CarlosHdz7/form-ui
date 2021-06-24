'use strict';

window.addEventListener('load', () => {

    //[VARIABLES]
    let userInputs = [];
    let konamiCode = [38,38,40,40,37,39,37,39,66,65]; //↑↑↓↓←→←→ba
    let customCode = [72,65,88,54,52,56,57,88,68,68]; //Hax6489xdd
    let validKeyCodes = [38,40,37,39]; //↑↓←→
    let showPassword = false;

    const strongPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/);
    const isLetterOrNumber = new RegExp(/^[a-zA-Z0-9]{1}$/);
    const isValidName = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/); 
    const onlyNumbers = new RegExp(/^[0-9]*$/);
    const isPhoneNumber = new RegExp(/^[0-9]{4}-[0-9]{4}$/);
    const isValidEmail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);
    const isvalidUrl = new RegExp(/^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))|([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))$/);

    //[HTML OBJECTS]
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

    //[EVENTS]
    btnSignin.addEventListener('click', (e) => {
        e.preventDefault();
        validateForm();
    });

    rgnExperience.addEventListener('change', (e) => {
        spnExperience.textContent = e.target.value;
    });

    document.addEventListener('keyup', (e) => {
        if(!isLetterOrNumber.test(e.key) && !validKeyCodes.includes(e.keyCode)) return;
        userInputs.push(e.which);
        updateInputsArray();
    });

    btnShowPassword.addEventListener('click', function(){
        if(showPassword){
            this.classList.add('show-password__active');
            for(let input of passwordInputs) input.type = 'text';
            showPassword = false;
        }else{
            this.classList.remove('show-password__active');
            for(let input of passwordInputs) input.type = 'password';
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

        if(errors.includes(false)){
            console.log('%c 🚨 Invalid submit', 'color:red');
            return;
        }

        showSubmittedData();
        
    };

    const validateName = () => {
        if(!txtName.value){
            showWarning(txtName, msgName, 'You must provide a name.');
            return false;
        }

        if(!isValidName.test(txtName.value)){
            showWarning(txtName, msgName, 'The name must only contain letters.');
            return false;
        }

        clearWarning(txtName, msgName);
        return true;
    };

    const validateLastName = () => {
        if(!txtLastName.value){
            showWarning(txtLastName, msgLastName, 'You must provide a lastname.');
            return false;
        }

        if(!isValidName.test(txtLastName.value)){
            showWarning(txtLastName, msgLastName, 'The lastname must only contain letters.');
            return false;
        }

        clearWarning(txtLastName, msgLastName);
        return true;
    };

    const validateAge = () => {
        if(!txtAge.value){
            showWarning(txtAge, msgAge, 'You must provide an age.');
            return false;
        }

        if(!(txtAge.value >= 18 && txtAge.value <= 40)){
            showWarning(txtAge, msgAge, 'Age has to be between 18 and 40.');
            return false;
        }

        if(!onlyNumbers.test(txtAge.value)){
            showWarning(txtAge, msgAge, 'Invalid age.');
            return false;
        }

        clearWarning(txtAge, msgAge);
        return true;
    };

    const validatePhone = () => {
        if(!txtPhone.value){
            showWarning(txtPhone, msgPhone, 'You must provide a phone.');
            return false;
        }

        if(!isPhoneNumber.test(txtPhone.value)){
            showWarning(txtPhone, msgPhone, 'You must provide a valid phone.');
            return false;
        }

        clearWarning(txtPhone, msgPhone);
        return true;
    };

    const validateWebSite = () => {
        if(!txtWebSite.value){
            showWarning(txtWebSite, msgWebSite, 'You must provide an URL.');
            return false;
        }

        if(!isvalidUrl.test(txtWebSite.value)){
            showWarning(txtWebSite, msgWebSite, 'You must provide a valid URL.');
            return false;
        }

        clearWarning(txtWebSite, msgWebSite);
        return true;
    };

    const validateEmail = () => {
        if(!txtEmail.value){
            showWarning(txtEmail, msgEmail, 'You must provide an email.');
            return false;
        }

        if(!isValidEmail.test(txtEmail.value)){
            showWarning(txtEmail, msgEmail, 'You must provide a valid email.');
            return false;
        }

        clearWarning(txtEmail, msgEmail);
        return true;
    };

    const validatePassword1 = () => {
        if(!txtPassword.value){
            showWarning(txtPassword, msgPassword, 'You must provide a password.');
            return false;
        }

        if(!strongPassword.test(txtPassword.value)){
            showWarning(txtPassword, msgPassword, 'The password must contain at least 1 lowercase character, 1 uppercase caracter, 1 numeric character and must be 8 characters or longer.');
            return false;
        }

        strongPassword

        clearWarning(txtPassword, msgPassword);
        return true;
    };

    const validatePassword2 = () => {
        if(!txtRepeatPassword.value){
            showWarning(txtRepeatPassword, msgRepeatPassword, 'You must repeat the password.');
            return false;
        }

        if(txtPassword.value !== txtRepeatPassword.value){
            showWarning(txtRepeatPassword, msgRepeatPassword, 'Password doesn\'t match.');
            return false;
        }
        clearWarning(txtRepeatPassword, msgRepeatPassword);
        return true;
    };

    const agreeTerms = () => {
        if(!chkTerms.checked){
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
            'Name':txtName.value,
            'Last Name':txtLastName.value,
            'Age': txtAge.value,
            'Phone': txtPhone.value,
            'Website': txtWebSite.value,
            'Email': txtEmail.value,
            'Password': txtPassword.value,
            'Year\'s experience': rgnExperience.value,
        });
    };

    /*KONAMI CODE FUNCTIONS*/
    const hideEasterEgg = () => {
        userInputs = [];
        backgroundShadow.classList.add('d-none');
        backgroundShadow.classList.remove('center-gif');
        gif.classList.add('d-none');
    };

    const showEasterEgg = () => {
        document.activeElement.blur();
        backgroundShadow.classList.remove('d-none');
        backgroundShadow.classList.add('center-gif');
        gif.classList.remove('d-none');

        setTimeout(function(){ 
            hideEasterEgg();
        }, 3000);
    };

    const updateInputsArray = () => {
        if(userInputs.length >= 10) {
            if(arrayEquals(userInputs, konamiCode) || arrayEquals(userInputs, customCode)) showEasterEgg();
            userInputs.shift();
        }
    };

    //[UTILITIES]
    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
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
    hideEasterEgg();
});