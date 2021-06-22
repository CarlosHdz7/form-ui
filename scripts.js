window.addEventListener('load', (event) => {

    //Regex
    const isValidName = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/); 
    const onlyNumbers = new RegExp(/^[0-9]*$/);
    const isPhoneNumber = new RegExp(/^[0-9]{4}-[0-9]{4}$/);
    const isValidEmail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);
    const isvalidUrl = new RegExp(/^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/);

    //[Objects]
    const TXTName = document.getElementById('TXTName');
    const TXTLastname = document.getElementById('TXTLastname');
    const TXTAge = document.getElementById('TXTAge');
    const TXTPhone = document.getElementById('TXTPhone');
    const TXTWebsite = document.getElementById('TXTWebsite');
    const RNGExpecience = document.getElementById('RNGExpecience');
    const TXTEmail = document.getElementById('TXTEmail');
    const TXTPassword = document.getElementById('TXTPassword');
    const TXTRepeatPassword = document.getElementById('TXTRepeatPassword');
    const CHKTerms = document.getElementById('CHKTerms');
    const BTNSignin = document.getElementById('BTNSignin');

    const MSGName = document.getElementById('MSGName');
    const MSGLastname = document.getElementById('MSGLastname');
    const MSGAge = document.getElementById('MSGAge');
    const MSGPhone = document.getElementById('MSGPhone');
    const MSGWebsite = document.getElementById('MSGWebsite');
    const MSGEmail = document.getElementById('MSGEmail');
    const MSGPassword = document.getElementById('MSGPassword');
    const MSGRepeatPassword = document.getElementById('MSGRepeatPassword');
    const MSGTerms = document.getElementById('MSGTerms');

    //[Events]
    BTNSignin.addEventListener('click',(e)=>{
        e.preventDefault();
        validateForm();
    });


    //[Functions]
    const validateForm = () => {
        validateName();
        validateLastName();
        validateAge();
        validatePhone();
        validateWebSite();
        validateEmail();
        validatePassword1();
        validatePassword2();
        agreeTerms();
    }

    const validateName = () => {

        if(isEmptyString(TXTName.value)){
            showWarning(TXTName,MSGName,"You must provide a name");
            return false;
        }

        if(!isValidName.test(TXTName.value)){
            showWarning(TXTName,MSGName,"The name must only contain letters");
            return false;
        }

        clearWarning(TXTName,MSGName);
        return true;
    }

    const validateLastName = () => {
        if(isEmptyString(TXTLastname.value)){
            showWarning(TXTLastname,MSGLastname,"You must provide a lastname");
            return false;
        }

        if(!isValidName.test(TXTLastname.value)){
            showWarning(TXTLastname,MSGLastname,"The lastname must only contain letters");
            return false;
        }

        clearWarning(TXTLastname,MSGLastname);
        return true;
    }

    const validateAge = () => {

        if(isEmptyString(TXTAge.value)){
            showWarning(TXTAge,MSGAge,"You must provide an age");
            return false;
        }

        if(!onlyNumbers.test(TXTAge.value)){
            showWarning(TXTAge,MSGAge,"Invalid age");
            return false;
        }

        clearWarning(TXTAge,MSGAge);
        return true;
    }

    const validatePhone = () =>{
        if(isEmptyString(TXTPhone.value)){
            showWarning(TXTPhone,MSGPhone,"You must provide a phone");
            return false;
        }

        if(!isPhoneNumber.test(TXTPhone.value)){
            showWarning(TXTPhone,MSGPhone,"You must provide a valid phone");
            return false;
        }

        clearWarning(TXTPhone,MSGPhone);
        return true;
    }

    const validateWebSite = () => {
        if(isEmptyString(TXTWebsite.value)){
            showWarning(TXTWebsite,MSGWebsite,"You must provide an URL");
            return false;
        }

        if(!isvalidUrl.test(TXTWebsite.value)){
            showWarning(TXTWebsite,MSGWebsite,"You must provide a valid URL");
            return false;
        }

        clearWarning(TXTWebsite,MSGWebsite);
        return true;
    }

    const validateEmail = () => {
        if(isEmptyString(TXTEmail.value)){
            showWarning(TXTEmail,MSGEmail,"You must provide an email");
            return false;
        }

        if(!isValidEmail.test(TXTEmail.value)){
            showWarning(TXTEmail,MSGEmail,"You must provide a valid email");
            return false;
        }

        clearWarning(TXTEmail,MSGEmail);
        return true;
    }

    const validatePassword1 = () => {

        if(isEmptyString(TXTPassword.value)){
            showWarning(TXTPassword,MSGPassword,"You must provide a password");
            return false;
        }

        clearWarning(TXTPassword,MSGPassword);
        return true;
    }

    const validatePassword2 = () => {
        if(isEmptyString(TXTRepeatPassword.value)){
            showWarning(TXTRepeatPassword,MSGRepeatPassword,"You must repeat the password");
            return false;
        }

        if(TXTPassword.value !== TXTRepeatPassword.value){
            showWarning(TXTRepeatPassword,MSGRepeatPassword,"Passwords doesn't match");
            return false;
        }
        clearWarning(TXTRepeatPassword,MSGRepeatPassword);
        return true;
    }

    const agreeTerms = () => {
        if(!CHKTerms.checked){
            MSGTerms.textContent = "You must agree terms and coditions";
            MSGTerms.classList.remove("d-none");
            return false;
        }

        MSGTerms.textContent = "";
        MSGTerms.classList.add("d-none");
        return true;
    }

    //Utilities
    const isEmptyString = text => (text == "") ? true : false;
    
    const clearWarning = (input, message) =>{
        message.textContent = "";
        message.classList.add("d-none");
        input.classList.remove("invalid-input");
    }

    const showWarning = (input, message,text) =>{
        message.textContent = text;
        message.classList.remove("d-none");
        input.classList.add("invalid-input");
    }
});