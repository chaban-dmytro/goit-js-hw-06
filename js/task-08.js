const form = document.querySelector( '.login-form' );

form.addEventListener( 'submit', onFormSubmit );

function onFormSubmit( event ) {
  event.preventDefault();
  const userElement = event.currentTarget.elements;

  if ( userElement.email.value != 0 && userElement.password.value != 0 ) {
    const user = {
      email: userElement.email.value,
      password: userElement.password.value,
    }
    event.target.reset()
    console.log( user );
  } else {
    return alert('Всі поля повинні дути заповнені!')
  }
}











