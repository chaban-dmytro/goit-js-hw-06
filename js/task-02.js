const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemsEl = document.querySelector( '#ingredients' );

const ingredientsItemEl = ingredients.map( ingredient => {
  const ingredientEl = document.createElement( 'li' );
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add( 'item' );
  console.log(ingredientEl);
  return ingredientEl;
} );

ingredientsItemsEl.append( ...ingredientsItemEl );








