function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector( 'input' );
const buttonCreateEl = document.querySelector( 'button[data-create]' );
const buttonDestroyEl = document.querySelector( 'button[data-destroy]' );
const outputEl = document.querySelector( '#boxes' );

let total = 0;

inputEl.addEventListener( 'blur', (event) => {
  total = event.currentTarget.value;
} );

buttonCreateEl.addEventListener( 'click', createBoxes );
buttonDestroyEl.addEventListener( 'click', destroyBoxes );

function createBoxes() {
  if ( total < 1 ) {
    alert( "Введи число більше 0" );
  } else {
    let size = 30;
    for (let i = 0; i < total ; i += 1) {
      const element = document.createElement( 'div' );
      element.classList.add(`element-${i}`)
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.background = getRandomHexColor();
      size = size + 10;
      console.log(element);
      outputEl.appendChild( element );
    }
  }
}

function destroyBoxes() {
  outputEl.innerHTML = '';
}



