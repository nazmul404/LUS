import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,FlatList } from 'react-native'
import {Header,Icon} from "react-native-elements"

export default class DetailsScreen extends Component {
    render() {
        const {navigation} = this.props;
        const item = navigation.getParam('item',{})
        // console.log(item);
        return (
            <View>
                <Header
                    leftComponent={
                        <Icon iconStyle={{marginLeft:5}}
                            name='arrow-back'
                            color='#fff'
                            onPress={()=> this.props.navigation.navigate("Home")}
                        />
                    }
                    centerComponent={{ text: 'Details', style: { color: '#fff' } }}
                    rightComponent={
                        <Icon iconStyle={{marginRight:5}}
                            name='notifications-active'
                            color='#fff'
                            onPress={()=>this.props.navigation.navigate('Notice')}
                        />
                    }
                />

                <FlatList 
                    data={item.image}
                    keyExtractor = {(item) => item.id}
                    renderItem={({item}) =>
                        <Image style={{height:250,borderRadius:6,marginHorizontal:16,marginVertical:8}}
                            resizeMode="cover"
                            source={{uri:item}}
                        />
                    }
                    ListFooterComponent={ 
                        <View style={{paddingBottom:150,marginHorizontal:16}}>
                            <Text style={{fontSize:28,fontWeight:'bold',paddingBottom:16}}>{item.title}</Text>
                            <Text style={{fontSize:16}}>{item.description}</Text>
                        </View>
                    }
                />
                
            </View>
        )
    }
}
