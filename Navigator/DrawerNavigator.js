import React from 'react'
import { createDrawerNavigator, } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import HomeScreen from '../Screen/HomeScreen';
import Profile from '../Screen/Profile'
import NoticeScreen from '../Screen/NoticeScreen';
import Event from '../Screen/Event';
import Group from '../Screen/Group';
import Alumni from '../Screen/Alumni';
import Departments from '../Screen/Departments';
import Club from '../Screen/Club';
import Contact from '../Screen/Contact';
import About from '../Screen/About';
import Result from '../Screen/Result'
import NavDrawer from '../Component/NavDrawer'
import {AntDesign,Feather,MaterialCommunityIcons,Foundation,MaterialIcons,FontAwesome} from '@expo/vector-icons'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title:"Home",
            drawerIcon: ({tintColor}) => <AntDesign name="home" size={16} color={tintColor}/>
        }
        
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title:"Profile",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor}/>
        }
    },
    Result: {
        screen: Result,
        navigationOptions: {
            title:"Result",
            drawerIcon: ({tintColor}) => <Foundation name="results" size={16} color={tintColor}/>
        }
    },
    Notice: {
        screen: NoticeScreen,
        navigationOptions: {
            title:"Notices",
            drawerIcon: ({tintColor}) => <AntDesign name="notification" size={16} color={tintColor}/>
        }
    },
    Event: {
        screen: Event,
        navigationOptions: {
            title:"Event",
            drawerIcon: ({tintColor}) => <MaterialIcons name="event" size={16} color={tintColor}/>
        }
    },
    Group: {
        screen: Group,
        navigationOptions: {
            title:"Group",
            drawerIcon: ({tintColor}) => <MaterialIcons name="group" size={16} color={tintColor}/>
        }
    },
    Club: {
        screen: Club,
        navigationOptions: {
            title:"Club",
            drawerIcon: ({tintColor}) => <FontAwesome name="object-group" size={16} color={tintColor}/>
        }
    },
    Alumni: {
        screen: Alumni,
        navigationOptions: {
            title:"Alumni",
            drawerIcon: ({tintColor}) => <FontAwesome name="graduation-cap" size={16} color={tintColor}/>
        }
    },
    Departments: {
        screen: Departments,
        navigationOptions: {
            title:"Departments",
            drawerIcon: ({tintColor}) => <FontAwesome name="university" size={16} color={tintColor}/>
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title:"Contacts",
            drawerIcon: ({tintColor}) => <AntDesign name="contacts" size={16} color={tintColor}/>
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title:"About",
            drawerIcon: ({tintColor}) => <MaterialCommunityIcons name="information-outline" size={16} color={tintColor}/>
        }
    }  
},  {
    initialRouteName: 'Home',
    contentComponent: props => <NavDrawer {...props} />
});

export default createAppContainer(DrawerNavigator);