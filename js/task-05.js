
const inputEl = document.querySelector( '#name-input' );
const outputEl = document.querySelector( '#name-output' );

inputEl.addEventListener( 'input', checkInput );

function checkInput( event ) {
  if ( String( event.currentTarget.value ).trim().length > 0 ) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = 'Anonymous';
  }  
}
