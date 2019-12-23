import React, { Component, Children } from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
export default class Box extends Component {
    
    render() {
        const {style}=this.props;
        const {children}=this.props;
        return (
            <View style={[styles.wrapper,style]}>{children}</View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.6,
        borderTopRightRadius:55,
        borderBottomLeftRadius:55,
        height:200,
        width:400,
        borderColor:'#000a12',
        backgroundColor:'#fff',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:12
    }
})
