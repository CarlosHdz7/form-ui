import { isLetterOrNumber } from './regexs.js';
import { arrayEquals } from './utilities.js';

(function () {

  //[VARIABLES]
  let userInputs = [];
  let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; //↑↑↓↓←→←→ba
  let customCode = [72, 65, 88, 54, 52, 56, 57, 88, 68, 68]; //Hax6489xdd
  let validKeyCodes = [38, 40, 37, 39]; //↑↓←→

  //[HTML ELEMENTS]
  const backgroundShadow = document.getElementById('backgroundShadow');
  const gif = document.getElementById('gif');

  //[EVENTS]
  document.addEventListener('keyup', e => {
    if (!isLetterOrNumber.test(e.key) && !validKeyCodes.includes(e.keyCode)) { return };
    userInputs.push(e.which);
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
      if (arrayEquals(userInputs, konamiCode) || arrayEquals(userInputs, customCode)) { showEasterEgg(); };

      userInputs.shift();
    }
  };

  //[SETTINGS]
  hideEasterEgg();
})();