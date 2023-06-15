function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector( 'body' );
const buttonEl = document.querySelector( '.change-color' );
const outputEl = document.querySelector( '.color' );

buttonEl.addEventListener( 'click', changeBodyColor );

function changeBodyColor() {
  let collor = getRandomHexColor();
  bodyEl.style.background = collor;
  outputEl.textContent = collor;
}

