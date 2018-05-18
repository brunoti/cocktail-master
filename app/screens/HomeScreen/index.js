import React, { Component } from 'react';

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
