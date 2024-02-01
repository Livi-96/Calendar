import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Calendar from '../screens/Calendar'
import CycleCalculator from '../screens/CycleCalc'

const screens = {
     Home: {
      screen: Home,
    },
    Calendar: {
      screen : Calendar
    },
    CycleCalculator: {
      screen : CycleCalculator
    }
  };
  

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)