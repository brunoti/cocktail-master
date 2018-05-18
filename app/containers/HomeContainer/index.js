import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './actions';
import HomeScreen from '../../screens/HomeScreen';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getRandomCocktail();
  }

  render() {
    return <HomeScreen {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    ...state.homeReducer,
  };
};

export default connect(mapStateToProps, actions)(HomeContainer);

