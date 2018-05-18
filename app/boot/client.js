import axios from 'react-native-axios';

export default axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  responseType: 'json'
});

