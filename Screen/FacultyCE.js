import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';
import CardFaculty from '../Component/common/CardFaculty';
import { FlatList } from 'react-native-gesture-handler';
import {AntDesign,Feather,MaterialCommunityIcons,Foundation,MaterialIcons,FontAwesome, Ionicons} from '@expo/vector-icons'

const CIVIL = [
    {
        id:"01",
        name:"Prof. Dr. M. Rakib Uddin",
        image:"https://www.lus.ac.bd/wp-content/uploads/2019/01/Md.-Rakib-Uddin-Dean-Social-Science.jpg",
        designation:"Professor Dean",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:["01711964950","01611964950"],
        email:"rakibuddin442@gmail.com",
    },
    {
        id:"02",
        name:"Abul Abrar Masrur Ahmed",
        image:"https://www.lus.ac.bd/wp-content/uploads/2018/10/CSC_0810.jpg",
        designation:"Assistant Professor Former Head (Acting)",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"+8801912140065",
        email:"masrur@lus.ac.bd",
    },
    {
        id:"03",
        name:"Md. Abu Zafor",
        image:"https://www.lus.ac.bd/wp-content/uploads/2017/11/1_1509565118139.jpg",
        designation:"Assistant Professor Head (Acting)",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"+8801971083433",
        email:"zaforce@lus.ac.bd",
    },
    {
        id:"04",
        name:"Engr. Md. Aminul Haque",
        image:"https://www.lus.ac.bd/wp-content/uploads/2018/09/20180925_094609.jpg",
        designation:"Assistant Professor and Former Head (Acting)",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"+8801672005555",
        email:"mahaque@lus.ac.bd",
    },
    {
        id:"05",
        name:"Syeda Zehan Farzana",
        image:"https://www.lus.ac.bd/wp-content/uploads/2019/09/31186222_1800230110040315_7181779020831260672_n-1.jpg",
        designation:"Assistant Professor",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"B.Sc Engg in Civil & Environmental Engineering, Shahjalal University of Science and Technology, Sylhet. M.Sc in Civil & Environmental Engineering, Shahjalal University of Science and Technology, Sylhet",
        cellPhone:"01911017626",
        email:"zehan_farzana@lus.ac.bd",
    },
    {
        id:"06",
        name:"Sheikh Hefzul Bari",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/ME.jpg",
        designation:"Assistant Professor",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"01711188073",
        email:"shbari.bd@gmail.com",
    },
    {
        id:"07",
        name:"Amit Chakraborty",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/Amit-Chakraborty.jpg",
        designation:"Lecturer",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"01719232497",
        email:"amitjoy.ce12@gmail.com",
    },
    {
        id:"08",
        name:"Shabbir Ahmed Osmani",
        image:"https://www.lus.ac.bd/wp-content/uploads/2018/05/Shabbir-photo-New.jpg",
        designation:"Lecturer",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"01751232163",
        email:"osmani@lus.ac.bd",
    },
    {
        id:"09",
        name:"Tanay Datta Chowdhury",
        image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Tanay-Datta-Chy.jpg",
        designation:"Lecturer",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"01725334646",
        email:"tanaydatta@ymail.com",
    },
    {
        id:"10",
        name:"Jafor Ahmed Limon",
        image:"https://www.lus.ac.bd/wp-content/uploads/2018/10/IMG_20181003_062237.jpg",
        designation:"Lecturer Advisor, Rover Scouts (LU)",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"+8801737401051",
        email:"jaforlimon@gmail.com",
    },
    {
        id:"11",
        name:"Nazmun Nahar Papri",
        image:"",
        designation:"Lecturer (Mathematics)",
        department:"Faculty of Modern Science Civil Engineering",
        biography:"",
        cellPhone:"01762912958",
        email:"npapri21@gmail.com",
    },
    
    ]


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
                        centerComponent={{text:'Civil Engineering',style:{color: '#fff',fontSize:18}}}
                        rightComponent={
                            <Icon iconStyle={{marginRight:5}}
                                name='notifications-active'
                                color='#fff'
                                onPress={()=>this.props.navigation.navigate('Notice')}
                            />
                        }
                />
                <FlatList
                    data={CIVIL}
                    renderItem={({item,index}) =>
                        <CardFaculty style={{padding:10,flexDirection:'row'}}>
                            {item.image? <Image source={{uri:item.image}} style={{height:90,width:90,borderRadius:75,borderColor:"#455a64",borderWidth:0.8,marginRight:10}} resizeMode='cover'/> :
                                <Feather
                                    name="user" size={70} style={{height:90,width:90,borderRadius:75,borderColor:"#455a64",borderWidth:0.8,paddingLeft:10,paddingTop:5,marginRight:10}}/>}
                            
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
