window.addEventListener('load', (event) => {

    //Variables
    let flagKonamiCode = false;

    //Regexs
    const isValidName = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/); 
    const onlyNumbers = new RegExp(/^[0-9]*$/);
    const isPhoneNumber = new RegExp(/^[0-9]{4}-[0-9]{4}$/);
    const isValidEmail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);
    const isvalidUrl = new RegExp(/^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/);

    //[Objects]
    const FRMSignIn = document.getElementById('FRMSignIn');
    const TXTName = document.getElementById('TXTName');
    const TXTLastname = document.getElementById('TXTLastname');
    const TXTAge = document.getElementById('TXTAge');
    const TXTPhone = document.getElementById('TXTPhone');
    const TXTWebsite = document.getElementById('TXTWebsite');
    const RNGExpecience = document.getElementById('RNGExpecience');
    const SPNExperience = document.getElementById('SPNExperience');
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

    const codeContainer = document.getElementById('codeContainer');

    //Settings
    FRMSignIn.reset();

    //[Events]
    BTNSignin.addEventListener('click',(e)=>{
        e.preventDefault();
        validateForm();
    });

    RNGExpecience.addEventListener('change',(e) =>{
        SPNExperience.textContent = e.target.value;
    })

    document.addEventListener('keyup',(e)=>{
        e.preventDefault();
        console.log(e);

        if(!flagKonamiCode){
            if(e.key == "ArrowUp"){
                createContainer(e);
                flagKonamiCode = true;
            }
        }else{
            createContainer(e);
        }

    })


    //[Functions]
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
            console.log("%c 🚨 Invalid submit","color:red");
            return;
        }

        showSubmittedData();
        
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

        if(!(TXTAge.value >= 18 && TXTAge.value <= 40)){
            showWarning(TXTAge,MSGAge,"Age has to be between 18 and 40");
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

        if(TXTPassword.value.length < 6){
            showWarning(TXTPassword,MSGPassword,"You must have at least 6 digits");
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
            showWarning(TXTRepeatPassword,MSGRepeatPassword,"Password doesn't match");
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

    const showSubmittedData = () =>{
        console.log("%c ✅ Successfull submit","color:green");
        console.table({
            "Name":TXTName.value,
            "Last Name":TXTLastname.value,
            "Age": TXTAge.value,
            "Phone": TXTPhone.value,
            "Website": TXTWebsite.value,
            "Email": TXTEmail.value,
            "Password": TXTPassword.value,
            "Year's experience": RNGExpecience.value
        });
    }

    const createContainer = (e) =>{

        switch (e.key) {
            case "ArrowUp":{
                createArrow("up");
             break;
            }
            
            case "ArrowDown":{
                createArrow("down");
            break;
            }

            case "ArrowLeft":{
                createArrow("left");
            break;
            }

            case "ArrowRight":{
                createArrow("right");
            break;
            }
        
            default:
                createLetterOrNumber(e.key);
                break;
        }

    }

    const createArrow = (direction) => {
        let div = document.createElement("DIV");
        let img = document.createElement("IMG");
        div.classList.add("button-code-arrow",direction);
        img.setAttribute("src","img/down-arrow.png");
        img.classList.add("img");
        div.appendChild(img);
        codeContainer.appendChild(div);
    }

    const createLetterOrNumber = (digit) => {
        let div = document.createElement("DIV");
        div.classList.add("button-code-letter");
        div.innerHTML = digit;
        codeContainer.appendChild(div);
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