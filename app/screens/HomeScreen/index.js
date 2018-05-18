import React, { Component } from 'react';
import { Container, Spinner, Text } from 'native-base';

class HomeScreen extends Component {
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <Container>
        <Text>
          {JSON.stringify(this.props.cocktail)}
        </Text>
      </Container>
    );
  }
}

export default HomeScreen;
