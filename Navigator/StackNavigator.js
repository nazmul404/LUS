import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screen/LoginScreen'
import SignUpScreen from '../Screen/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';
import DetailsScreen from '../Screen/DetailsScreen';


const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    SignUp: {
        screen: SignUpScreen
    },
    DrawerNavigavigation: {
        screen: DrawerNavigator,
        navigationOptions: {
            header:null
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            header:null
        }
    },
})

export default createAppContainer(StackNavigator);