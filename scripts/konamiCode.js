import { arrayEquals } from './utilities.js';

(function () {

  //[VARIABLES]
  let userInputs = [];
  let konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']; //[↑↑↓↓←→←→ba]
  let customCode = ['h', 'a', 'x', '1', '2', '3', 'x', 'd', 'd', 'd']; //[hax123xddd]
  let ignoreKeys = ['Shift','CapsLock', 'NumLock'];

  //[HTML ELEMENTS]
  const backgroundShadow = document.getElementById('backgroundShadow');
  const gif = document.getElementById('gif');

  //[EVENTS]
  document.addEventListener('keyup', e => {
    if (ignoreKeys.includes(e.key)) { return };

    userInputs.push(e.key.toLowerCase());
    updateInputsArray();
  });

  //[FUNCTIONS]
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

    setTimeout( () => {
      hideEasterEgg();
    }, 3000);
  };

  const updateInputsArray = () => {
    if (userInputs.length >= 10) {
      if (arrayEquals(userInputs, konamiCode) || arrayEquals(userInputs, customCode)) { 
        showEasterEgg(); 
      };
      userInputs.shift();
    }
  };

  //[SETTINGS]
  hideEasterEgg();
})();