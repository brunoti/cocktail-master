import HomeContainer from './containers/HomeContainer';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: {
    screen: HomeContainer
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
  },
});

