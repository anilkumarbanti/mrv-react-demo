const { createStore } = require('redux');

const initialState = {
  cakes: 10,
  ingredients: {
    flour: 100, // in kg
    sugar: 50, // in kg
    eggs: 200 // in dozens
  }
};

const BAKE_CAKE = 'BAKE_CAKE';
const RESTOCK_INGREDIENTS = 'RESTOCK_INGREDIENTS';

const bakeCake = (quantity) => ({
  type: BAKE_CAKE,
  quantity,
});

const restockIngredients = (ingredients) => ({
  type: RESTOCK_INGREDIENTS,
  ingredients,
});

const bakeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAKE_CAKE:
      return {
        ...state,
        cakes: state.cakes + action.quantity,
        ingredients: {
          ...state.ingredients,
          flour: state.ingredients.flour - 2 * action.quantity,
          sugar: state.ingredients.sugar - 1 * action.quantity,
          eggs: state.ingredients.eggs - 1 * action.quantity,
        },
      };
    case RESTOCK_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          ...action.ingredients,
        },
      };
    default:
      return state;
  }
};

const store = createStore(bakeryReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(bakeCake(5));
store.dispatch(restockIngredients({ flour: 50, sugar: 20, eggs: 50 }));
