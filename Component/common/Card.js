import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.wrapper}>
                {children}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        // backgroundColor:"#f1f8e9",
        borderWidth:0.2,
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:10,
        overflow:'hidden',

    }
})