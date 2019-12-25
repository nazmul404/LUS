import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';
import CardFaculty from '../Component/common/CardFaculty';
import { FlatList } from 'react-native-gesture-handler';

const EEE = [{
    id:"01",
    name:"Rumel M. S. Rahman Pir",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/Rumel-M.S.-Rahman-Pir.jpg",
    designation:"Associate Professor",
    department:"Computer Science & Engineering / EEE",
    biography:"",
    cellPhone:"01758228736",
    email:"head_eee@lus.ac.bd",
},
{
    id:"02",
    name:"Mrinal Kanti Dhar",
    image:"https://www.lus.ac.bd/wp-content/uploads/2016/09/Mrinal-Kanti-Dhar.jpg",
    designation:"Assistant Professor",
    department:"EEE",
    biography:"",
    cellPhone:"+8801719447739",
    email:"mrinal054@gmail.com",
},
{
    id:"03",
    name:"Md. Tanjimuddin",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/Md.-Tajimuddin.jpg",
    designation:"Lecturer",
    department:"EEE",
    biography:"",
    cellPhone:"",
    email:"tanjim0023@gmail.com",
},
{
    id:"04",
    name:"Rafiqul Islam",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/DSC_2280.jpg",
    designation:"Lecturer Advisor, Leading University Electronics Club",
    department:"EEE",
    biography:"MS (Thesis) in Nanostructure Physics, 2008 Shahjalal University of Science and Technology, Sylhet-3114, Bangladesh BSc (Honors) in Physics, 2007 Shahjalal University of Science and Technology, Sylhet-3114, Bangladesh Higher Secondary Certificate (HSC) Examination, 2002 Secondary and Higher Secondary Education Board, Dhaka - Bangladesh Secondary School Certificate (SSC) Examination, 2000 Secondary and Higher Secondary Education Board, Dhaka - Bangladesh",
    cellPhone:"01716 446071",
    email:"rafiqulzyl@lus.ac.bd",
},
{
    id:"05",
    name:"Rupak Kanti Dhar",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/Rupak-Kanti-Dhar.jpg",
    designation:"Lecturer Co-advisor, Electronics Club",
    department:"EEE",
    biography:"",
    cellPhone:"01673448337",
    email:"rupak0013@lus.ac.bd",
},
{
    id:"06",
    name:"Md. Ashraful Islam",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/04/D-D54433.jpg",
    designation:"Lecturer Member, Course Offering & Distribution Committee",
    department:"EEE",
    biography:" M.Sc.- Information Technology-SUST- Ongoing B.Sc.-Electrical, Electronic and Communication Engineering- Military Institute of Science and Technology- Graduated in 2015 (January) H.S.C.- Science- Notre Dame College-2010 S.S.C.- Science- Motijheel Govt. Boys' High School-2008",
    cellPhone:"+8801670700261",
    email:"ashraful.islam@lus.ac.bd",
},
{
    id:"07",
    name:"Md. Niaz Morshedul Haque",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/12/02.jpg",
    designation:"Lecturer Counselor, IEEE LUSB and Convener, Research and Project Advisory Committee",
    department:"EEE",
    biography:"",
    cellPhone:"+88-01717255769",
    email:"niaz.morshed@lus.ac.bd",
},
{
    id:"08",
    name:"Md. Moontasir Rashid",
    image:"https://www.lus.ac.bd/wp-content/uploads/2018/09/Moontasir-Rashid.jpg",
    designation:"Lecturer Member, Research and Project Advisory Committee",
    department:"EEE",
    biography:"B.Sc. in Electrical & Electronic Engineering (EEE) from American International University- Bangladesh (AIUB). Higher Secondary School Certificate (HSC) from BAF Shaheen College,Dhaka. Secondary School Certificate (SSC) from BAF Shaheen College,Dhaka.",
    cellPhone:"+880162824500",
    email:"moontasir@lus.ac.bd",
},
{
    id:"09",
    name:"Afshana Begum",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/11/Afshana-Begum.jpg",
    designation:"Lecturer",
    department:"EEE",
    biography:"",
    cellPhone:"",
    email:"afsanab96@gmail.com",
}]


export default class FacultyCse extends Component {
    render() {
        // console.log(EEE);
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
                        centerComponent={{ text: 'Electrical & Electronic Engineering(EEE)', style:{color:'#fff',fontSize:16}}}
                        rightComponent={
                            <Icon iconStyle={{marginRight:5}}
                                name='notifications-active'
                                color='#fff'
                                onPress={()=>this.props.navigation.navigate('Notice')}
                            />
                        }
                />
                   <FlatList
                    data={EEE}
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
