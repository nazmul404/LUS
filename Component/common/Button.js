import React, { Component } from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'

export default class Button extends Component {
    render() {
        const {onPress,title,style} =this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.wrapper,style]}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    btnText: {
        color:'#fff',
        // fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    },
    wrapper: {
        padding:10,
        backgroundColor:'#0073D8',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    }
}) 