window.addEventListener('load', (event) => {

    //Regex
    const isValidName = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/); 
    const onlyNumbers = new RegExp(/^[0-9]*$/);
    const isPhoneNumber = new RegExp(/[0-9]{4}-[0-9]{4}/);
    const isValidEmail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);

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
        validatePassword();
    }

    const validateName = () => {

        if(isEmptyString(TXTName.value)){
            console.log("primero")
            TXTName.classList.add("invalid-input");
            return false;
        }

        if(!isValidName.test(TXTName.value)){
            console.log("segundo")
            TXTName.classList.add("invalid-input");
            return false;
        }

        TXTName.classList.remove("invalid-input");
        return true;
    }

    const validateLastName = () => {
        if(isEmptyString(TXTLastname.value)){
            TXTLastname.classList.add("invalid-input");
            return false;
        }

        if(!isValidName.test(TXTLastname.value)){
            TXTLastname.classList.add("invalid-input");
            return false;
        }

        TXTLastname.classList.remove("invalid-input");
        return true;
    }

    const validateAge = () => {
        if(isEmptyString(TXTAge.value)){
            TXTAge.classList.add("invalid-input");
            return false;
        }

        if(!onlyNumbers.test(TXTAge.value)){
            TXTAge.classList.add("invalid-input");
            return false;
        }

        TXTAge.classList.remove("invalid-input");
        return true;
    }

    const validatePhone = () =>{
        if(isEmptyString(TXTPhone.value)){
            TXTPhone.classList.add("invalid-input");
        }

        if(!isPhoneNumber.test(TXTPhone.value)){
            TXTPhone.classList.add("invalid-input");
        }
    }

    const validateWebSite = () => {
        if(isEmptyString(TXTWebsite.value)){
            TXTWebsite.classList.add("invalid-input");
        }
    }

    const validateEmail = () => {
        if(isEmptyString(TXTEmail.value)){
            TXTEmail.classList.add("invalid-input");
        }

        if(!isValidEmail.test(TXTEmail.value)){
            TXTEmail.classList.add("invalid-input");
        }
    }

    const validatePassword = () => {
        if(isEmptyString(TXTPassword.value)){
            TXTPassword.classList.add("invalid-input");
            return false;
        }

        if(isEmptyString(TXTRepeatPassword.value)){
            TXTRepeatPassword.classList.add("invalid-input");
            return false;
        }

        if(TXTPassword.value !== TXTRepeatPassword.value){
            TXTRepeatPassword.classList.add("invalid-input");
            return false;
        }

        return true;
    }

    //Utilities
    const isEmptyString = text => (text == "") ? true : false;
    

});