import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';
import CardFaculty from '../Component/common/CardFaculty';
import { FlatList } from 'react-native-gesture-handler';

const ENGLISH = [

    {
        id:"01",
        name:"Prof. Nasir Uddin Ahmed",
        image:"https://www.lus.ac.bd/wp-content/uploads/2019/04/Prof.-Nasir-Uddin-Ahmed.jpg",
        designation:"Professor Dean",
        biography:"",
        cellPhone:"01715022109",
        email:"nasirnuman@yahoo.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"02",
        name:"Md. Rezaul Karim",
        image:"https://www.lus.ac.bd/wp-content/uploads/2016/08/20150119_201519-1.jpg",
        designation:"Associate Professor & Head Director, IQAC, LU, Sylhet",
        biography:"",
        cellPhone:"01711467396",
        email:"tahrez2005@yahoo.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"03",
        name:"Muhammad Nazrul Islam",
        image:"https://www.lus.ac.bd/wp-content/uploads/2017/01/IMG_9542.jpg",
        designation:"Assistant Professor",
        biography:"",
        cellPhone:"+8801717326505",
        email:"nazrul@lus.ac.bd",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"04",
        name:"Mrs. Rumpa Sharmin",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/img20100731044315.jpg",
        designation:"Assistant Professor",
        biography:"",
        cellPhone:"01711147833",
        email:"rushmin.bd@gmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"05",
        name:"Mrs. Manfath Jabin Haque",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/manfath-jabin-hauqe0005.jpg",
        designation:"Assistant Professor",
        biography:"",
        cellPhone:"01916100250",
        email:"manfath@gmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"06",
        name:"Abu Saeed Md. Naheed",
        image:"https://www.lus.ac.bd/wp-content/uploads/2017/09/Abu-Saeed-Md.-Naheed.jpg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"01913607825",
        email:"naahid.asm@gmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"07",
        name:"Ms. Shammi Akter",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Shammi-Akter.jpg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"01674764323",
        email:"aktershammi26@gmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"08",
        name:"Ms. Touhida Sultana",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Touhida-Sultana.jpg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"01911243565",
        email:"touhida@lus.ac.bd",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"09",
        name:"Ashfaque Ahmad Shovon",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Ashfaque-Ahmad-Shovon.jpg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"01674676796",
        email:"ashfaque-shovon@hotmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"10",
        name:"Tasnia Mizan Chowdhury",
        image:"https://www.lus.ac.bd/wp-content/uploads/2018/09/3F16B79C-EBDF-4367-B0F6-B2CCD0890469.jpeg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"+8801755045452",
        email:"tasniachowdhury611@gmail.com",
        department:"Faculty of Arts and Modern Language English"
    },
    {
        id:"11",
        name:"Ms. Jarin Tasnim Elahi",
        image:"https://www.lus.ac.bd/wp-content/uploads/2019/06/Screenshot_20190610_123222.jpg",
        designation:"Lecturer",
        biography:"",
        cellPhone:"01712332441",
        email:"xarintasnim91@gmail.com",
        department:"Faculty of Arts and Modern Language English"
}]


export default class FacultyCse extends Component {
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
                        centerComponent={{ text: 'Arts and Modern Language English', style: { color: '#fff',fontSize:16}}}
                        rightComponent={
                            <Icon iconStyle={{marginRight:5}}
                                name='notifications-active'
                                color='#fff'
                                onPress={()=>this.props.navigation.navigate('Notice')}
                            />
                        }
                />
                <FlatList
                    data={ENGLISH}
                    renderItem={({item,index}) =>
                        <CardFaculty style={{padding:10,flexDirection:'row'}}>
                            <Image source={{uri:item.image}} style={{height:90,width:90,borderRadius:75,borderColor:"#455a64",borderWidth:0.8,marginRight:10}} resizeMode='cover'/>
                            <View style={{borderLeftWidth:1.5,borderColor:"#000a12",marginRight:10}}></View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                                    <Text style={{fontSize:18}}>{item.designation}</Text>
                                    <Text style={{fontSize:18}}>{item.department}</Text>
                                    {/* {!item.cellPhone && <Text>{item.cellphone}</Text>} */}
                                    <Text style={{fontSize:16}}>Email: {item.email}</Text>
                                </View> 
                        </CardFaculty>    
                    }
                    ListFooterComponent={
                            <View style={{padding:60}}>

                            </View>
                        }
                />
            </View>
        )
    }
}
