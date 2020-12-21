import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import First from './src/screens/First';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: First,
    List: ListScreen

  },
  { 
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'PranavHegde',
    },
  }
);
  
export default createAppContainer(navigator);
