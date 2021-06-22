window.addEventListener('load', (event) => {

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
    })

    //[Functions]
    const validateForm = () => {

        if(TXTName.value == ''){
            TXTName.classList.add("invalid-input");
        }

        if(TXTLastname.value == ''){
            TXTLastname.classList.add("invalid-input");
        }

        if(!isNaN(TXTAge.value)){
            TXTAge.classList.add("invalid-input");
        }

        if(TXTPhone.value == ''){
            TXTPhone.classList.add("invalid-input");
        }

        if(TXTWebsite.value == ''){
            TXTWebsite.classList.add("invalid-input");
        }

        if(TXTEmail.value == ''){
            TXTEmail.classList.add("invalid-input");
        }

        if(TXTPassword.value == ''){
            TXTPassword.classList.add("invalid-input");
        }

        if(TXTRepeatPassword.value == ''){
            TXTRepeatPassword.classList.add("invalid-input");
        }

        
    }

});