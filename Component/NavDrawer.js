import React from 'react'
import { Text, View,StyleSheet,ScrollView,Image} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'


export default NavDrawer = props =>  (
    <ScrollView>
                <View style={{width:undefined,padding:24,paddingTop:58,backgroundColor:'#eeeeee'}}>
                    <Image source={require('../assets/profile_pic.jpg')} style={styles.profile}/>
                    <Text style={styles.name}>Nazmul Hasan</Text>
                    <Text style={{fontSize:12}} >Department of Computer Science and Engineering</Text>
                </View>
                <View style={styles.container}>
                    <DrawerItems {...props} />
                </View>

    </ScrollView>
)



const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingRight:0
    },
    profile: {
        height:80,
        width:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#FFF"
    },
    name: {
        color:"#424242",
        fontSize:16,
        marginVertical:8
    }
})