const allCategories = document.querySelectorAll( '.item' );
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(element => {
  let category = element.querySelector( 'h2' ).textContent;
  let countElements = element.querySelectorAll( 'li' ).length;
  console.log( `Categoty: ${category}
Elements: ${countElements}` );
});





