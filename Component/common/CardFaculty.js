import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class CardFaculty extends Component {
    render() {
        const {children,style} = this.props;
        return (
            <View style={[styles.wrapper,style]}>
                {children}
            </View>
        )
    }
}


const styles=StyleSheet.create({
    wrapper: {
        // backgroundColor:"#f1f8e9",
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:12,
        marginVertical:10,
        overflow:'hidden',

    }
})
