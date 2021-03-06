import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';


export default class Contact extends Component {
    render() {
        return (
            <View>
            <Header
                    leftComponent={
                        <Icon iconStyle={{marginLeft:5}}
                            name='menu'
                            color='#fff'
                            onPress={()=> this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                        />
                    }
                    centerComponent={{ text: 'Contact Information', style: { color: '#fff' } }}
                    rightComponent={
                        <Icon iconStyle={{marginRight:5}}
                            name='notifications-active'
                            color='#fff'
                            onPress={()=>this.props.navigation.navigate('Notice')}
                        />
                    }
                />
                <Text> Contact </Text>
            </View>
        )
    }
}
