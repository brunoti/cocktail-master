const GET_RANDOM_COCKTAIL = 'GET_RANDOM_COCKTAIL';
const GET_RANDOM_COCKTAIL_SUCCESS = 'GET_RANDOM_COCKTAIL_SUCCESS';
const GET_RANDOM_COCKTAIL_FAIL = 'GET_RANDOM_COCKTAIL_FAIL';

export const types = {
  GET_RANDOM_COCKTAIL,
  GET_RANDOM_COCKTAIL_SUCCESS,
  GET_RANDOM_COCKTAIL_FAIL,
};

export default {
  getRandomCocktail() {
    console.log('Random cocktail called!');
    return {
      type: GET_RANDOM_COCKTAIL,
      payload: {
        request: {
          url: 'random.php',
        }
      }
    };
  }
};
