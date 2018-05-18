import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';

import store from './boot/store';
import Router from './Router';

class Master extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Master;
