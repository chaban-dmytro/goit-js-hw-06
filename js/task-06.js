const inputEl = document.querySelector( 'input' );
inputEl.id = ( 'validation-input' );

inputEl.addEventListener( 'blur', checkSymbols );

function checkSymbols( event ) {
  if ( Number(inputEl.dataset.length) === Number(event.currentTarget.value.length) ) {
    addClass('valid');
    removeClass('invalid');
  } else {
    addClass('invalid');
    removeClass('valid');
  };
}

function addClass( className ) {
  inputEl.classList.add(className);
};

function removeClass( className ) {
  inputEl.classList.remove(className);
}

