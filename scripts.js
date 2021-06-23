'use strict';

window.addEventListener('load', (event) => {

    //[VARIABLES]
    let activateCodeMode = false;
    let preventKeys = {37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1,32: 1};
    let userInputs = [];
    let konamiCode = [38,38,40,40,37,39,37,39,66,65]; //↑↑↓↓←→←→ab
    let customCode = [38,72,65,88,54,52,56]; //↑Hax648

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
    const codeContainer = document.getElementById('codeContainer');
    const backgroundShadow = document.getElementById('backgroundShadow');
    const gif = document.getElementById('gif');

    //[EVENTS]
    btnSignin.addEventListener('click', (e) => {
        e.preventDefault();
        validateForm();
    });

    rgnExperience.addEventListener('change', (e) => {
        spnExperience.textContent = e.target.value;
    });

    document.addEventListener('keydown', (e) => {
        
        if (preventKeys[e.keyCode]) {
            e.preventDefault(e);
        }

        console.log(e);

        if(!activateCodeMode){
            if(e.key == 'ArrowUp'){
                activateCodeMode = true;
                document.activeElement.blur();
                createButton(e);
                backgroundShadow.classList.remove('d-none');
                backgroundShadow.classList.add('center-gif');
            }
        }else{
            document.activeElement.blur()
            createButton(e);
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
            console.log('%c 🚨 Invalid submit','color:red');
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

        if(txtPassword.value.length < 6){
            showWarning(txtPassword, msgPassword, 'You must have at least 6 digits.');
            return false;
        }

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
    const createButton = (e) => {
        switch (e.key) {
            case 'ArrowUp':{
                addContentButton('🢁', e.which);
                break;
            }
            
            case 'ArrowDown':{
                addContentButton('🢃', e.which);
                break;
            }

            case 'ArrowLeft':{
                addContentButton('🢀', e.which);
                break;
            }

            case 'ArrowRight':{
                addContentButton('🢂', e.which);
                break;
            }

            case 'Escape':{
                clearButtons();
                break;
            }

            case 'Enter':{
                if(arrayEquals(userInputs, konamiCode) || arrayEquals(userInputs, customCode)){
                    changeColorButton('valid-button-code', 'add');
                    gif.classList.remove('d-none');
                }else{
                    changeColorButton('invalid-button-code', 'add');
                    setTimeout(function(){ 
                        clearButtons();
                     }, 400);
                }
                break;
            }
        
            default:
                if(!isLetterOrNumber.test(e.key)) break;
                addContentButton(e.key, e.which);
                break;
        }

    };

    const addContentButton = (digit,keyCode) => {
        let div = document.createElement('DIV');
        div.classList.add('code-container__button');
        div.innerHTML = digit;
        codeContainer.appendChild(div);

        userInputs.push(keyCode);
        updateButtons();
    };

    const clearButtons = () => {
        userInputs = [];
        activateCodeMode = false;
        codeContainer.classList.remove('valid-code', 'invalid-code');
        backgroundShadow.classList.add('d-none');
        backgroundShadow.classList.remove('center-gif');
        changeColorButton('','clear');
        gif.classList.add('d-none');
        while(codeContainer.firstChild) codeContainer.removeChild(codeContainer.firstChild);
    };

    const updateButtons = () => {
        if(userInputs.length > 10) {
            codeContainer.removeChild(codeContainer.firstChild);
            userInputs.shift();
            return;
        }
    };

    const changeColorButton = (className = '', option = 'add') => {
        let buttons = document.getElementsByClassName('code-container__button');
        for(let button of buttons){
            if(option === 'clear') button.classList.remove('valid-button-code', 'invalid-button-code');
            else if (option === 'add') button.classList.add(className);
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
    clearButtons();
});