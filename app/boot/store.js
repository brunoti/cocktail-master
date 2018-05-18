import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import client from './client';
import axiosMiddleware from 'redux-axios-middleware';

const middlewareConfig = {
    interceptors: {
      request: [
        function ({getState, dispatch, getSourceAction}, req) {
          console.log('Request', req); //contains information about request object
          return req;
        },
        function ({getState, dispatch, getSourceAction}, req) {
          //...
          return req;
        }
      ],
      response: [
        function ({getState, dispatch, getSourceAction}, req) {
          console.log('Response', req); //contains information about request object
          //...
          return req;
        },
        function ({getState, dispatch, getSourceAction}, req) {
          //...
          return req;
        }
      ]
    }
  };

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client, middlewareConfig)));

export default store;
