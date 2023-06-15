
const inputEl = document.querySelector( '#name-input' );
const outputEl = document.querySelector( '#name-output' );

inputEl.addEventListener( 'input', checkInput );

function checkInput( event ) {
  outputEl.textContent = event.currentTarget.value;
}
