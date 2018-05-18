const initialState = {
  cocktail: {},
  isLoading: true,
  hasError: false
};

import { types } from './actions';

export default function reducer(state = initialState, action) {
  console.log('Reduced called with action:', action);

  switch (action.type) {
    case types.GET_RANDOM_COCKTAIL:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_RANDOM_COCKTAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cocktail: action.payload.data.drinks[0],
      };
    case types.GET_RANDOM_COCKTAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
