const courentValueEl = document.querySelector('#value');
const counterEl = document.querySelectorAll( 'button' );
let counter = Number(courentValueEl.textContent);

const decrementValue = () => {
  counter -= 1;
  courentValueEl.textContent = counter;
};

const incrementValue = () => {
  counter += 1;
  courentValueEl.textContent = counter;
};

counterEl[0].addEventListener( 'click', decrementValue );
counterEl[1].addEventListener( 'click', incrementValue );



