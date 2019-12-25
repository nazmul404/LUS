import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import FacultyCse from '../Screen/FacultyCSE';
import FacultyBBA from '../Screen/FacultyBBA';
import FacultyEEE from '../Screen/FacultyEEE';
import {MaterialCommunityIcons,MaterialIcons,FontAwesome,Ionicons,Octicons} from '@expo/vector-icons'
import FacultyARCH from '../Screen/FacultyARCH';
import FacultyEnglish from '../Screen/FacultyEnglish';
import FacultyLAW from '../Screen/FacultyLAW';
import FacultyCE from '../Screen/FacultyCE';

const TabNavigatior = createBottomTabNavigator({
    CSE: {
        screen: FacultyCse,
        navigationOptions: {
            tabBarLabel:"CSE",
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons
                    name="computer" size={24} color={tintColor}
                />
            )
        }
    },
    BBA: {
        screen: FacultyBBA,
        navigationOptions: {
            tabBarLabel:"BBA",
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name="ios-briefcase" size={24} color={tintColor}
                />
            )
        }
    },
    EEE: {
        screen: FacultyEEE,
        navigationOptions: {
            tabBarLabel:"EEE",
            tabBarIcon: ({tintColor}) => (
                <MaterialCommunityIcons
                    name="car-battery" size={24} color={tintColor}
                />
            )
        }

    },
    ARCH: {
        screen: FacultyARCH,
        navigationOptions: {
            tabBarLabel:"ARCH",
            tabBarIcon: ({tintColor}) => (
                <FontAwesome
                    name="building-o" size={24} color={tintColor}
                />
            )
        }
    },
    ENGLISH: {
        screen: FacultyEnglish,
        navigationOptions: {
            tabBarLabel:"ENGLISH",
            tabBarIcon: ({tintColor}) => (
                <MaterialCommunityIcons
                    name="teach" size={24} color={tintColor}
                />
            )
        }
    },
    CE: {
        screen: FacultyCE,
        navigationOptions: {
            tabBarLabel:"CE",
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name="ios-construct" size={24} color={tintColor}
                />
            )
        }
    },
    LAW: {
        screen: FacultyLAW,
        navigationOptions: {
            tabBarLabel:"LAW",
            tabBarIcon: ({tintColor}) => (
                <Octicons
                    name="law" size={24} color={tintColor}
                />
            )
        }
    }, 

}, {
    tabBarOptions: {
        style:{height:60},
        tabStyle:{height:50}
    }
})

export default createAppContainer(TabNavigatior);