import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../Screen/LoginScreen'
import SignUpScreen from '../Screen/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';


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
    }
})

export default createAppContainer(StackNavigator);