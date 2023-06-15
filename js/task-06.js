const inputEl = document.querySelector( 'input' );
inputEl.id = ( 'validation-input' );

inputEl.addEventListener( 'blur', checkSymbols );

function checkSymbols( event ) {
  if ( inputEl.dataset.length == event.currentTarget.value.length ) {
    inputEl.classList.add( 'valid' );
    inputEl.classList.remove('invalid')
  } else {
    inputEl.classList.add( 'invalid' );
    inputEl.classList.remove( 'valid' );

  };
}

