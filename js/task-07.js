const inputEl = document.querySelector( '#font-size-control' );
const outputEl = document.querySelector( '#text' );

inputEl.setAttribute( 'value', inputEl.getAttribute( 'min' ) );

outputEl.style.fontSize = inputEl.getAttribute( 'min' );

inputEl.addEventListener( 'input', checkInput );

function checkInput( event ) {
  outputEl.style.fontSize = `${event.currentTarget.value}px`;
}

