const courentValueEl = document.querySelector('#value');
// const counterEl = document.querySelectorAll( 'button' );
const descrementEl = document.querySelector('button[data-action="decrement"]')
const incrementEl = document.querySelector('button[data-action="increment"]')
let counter = Number(courentValueEl.textContent);

const decrementValue = () => {
  counter -= 1;
  courentValueEl.textContent = counter;
};

const incrementValue = () => {
  counter += 1;
  courentValueEl.textContent = counter;
};

descrementEl.addEventListener( 'click', decrementValue );
incrementEl.addEventListener( 'click', incrementValue );

// counterEl[0].addEventListener( 'click', decrementValue );
// counterEl[1].addEventListener( 'click', incrementValue );



