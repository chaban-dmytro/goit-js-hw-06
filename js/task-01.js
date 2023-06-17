const categoriesEl = document.querySelectorAll( '.item' );

console.log( `Number of categories: ${categoriesEl.length}` );

categoriesEl.forEach(element => {
  const elementName = element.firstElementChild.textContent;
  const elementCounter = element.lastElementChild.children.length;
  console.log( `Categoty: ${elementName}
Elements: ${elementCounter}` );
});
