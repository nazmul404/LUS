import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';
import CardFaculty from '../Component/common/CardFaculty';
import { FlatList } from 'react-native-gesture-handler';

const CSE =[{
    id:"01",
    name:"Md. Asaduzzaman Khan (MAK)",
    image:"https://www.lus.ac.bd/wp-content/uploads/2016/08/image-2.jpeg",
    designation:"Assistant Professor Head (Acting)",
    department:"Computer Science & Engineering",
    biography:"BCIC School (1995)-S.S.C. Dhaka College (1997)-H.S.C. AIUB (2002)- B.Sc. in Computer Engineering. BTH, Sweden (2006)- M.Sc. in EEE.",
    cellPhone:"+8801711003233",
    email:"head_cse@lus.ac.bd",
},
{
    id:"02",
    name:"Arif Ahmad",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/09/rsz_1dsc_0371.jpg",
    designation:"Assistant Professor",
    department:"Computer Science & Engineering",
    biography:"Ph.D. (ongoing), Shahjalal University of Science & Technology. B.Sc. in CIT, Islamic University of Technology (IUT).",
    cellPhone:"+8801715274319",
    email:"arif@lus.ac.bd",
},
{
    id:"03",
    name:"Rumel M. S. Rahman Pir",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/Rumel-M.S.-Rahman-Pir.jpg",
    designation:"Associate Professor",
    department:"Computer Science & Engineering",
    biography:"",
    cellPhone:"01758228736",
    email:"head_eee@lus.ac.bd",
},
{
    id:"04",
    name:"Sabia Akter Bhuiyan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/11/sabia_akter.jpg",
    designation:"Assistant Professor",
    department:"Computer Science & Engineering",
    biography:"M.Sc. in Mathematics (With Thesis), Shahjalal University of Science & Technology.(SUST) B.Sc. in Mathematics, Shahjalal University of Science & Technology.(SUST)",
    cellPhone:"01714506159",
    email:"aktersabia@yahoo.com",
},
{
    id:"05",
    name:"Minhazul Haque Bhuiyan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/Riad.jpg",
    department:"Computer Science & Engineering",
    designation:"Assistant Professor Assistant Proctor",
    biography:"M.Sc. in CSE (ongoing), Shahjalal University of Science & Technology.(SUST) B.Sc. in CSE, Shahjalal University of Science & Technology.(SUST)",
    cellPhone:"+8801678174660",
    email:"minhazulriad@yahoo.com",
},
{
    id:"06",
    name:"Selina Sharmin",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/SSM.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"M.Sc. in CSE (ongoing), Shahjalal University of Science & Technology (SUST) B.Sc. in CSE, Leading University (LU) H.S.C. Sylhet Board S.S.C. Sylhet Board",
    cellPhone:"01719191660",
    email:"selinasharmin_bd@yahoo.com",
},
{
    id:"07",
    name:"Arafat Habib Quraishi",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/132.jpg",
    designation:"Lecturer Member, Routine Committee",
    department:"Computer Science & Engineering",
    biography:"M.Sc. (Thesis) in CSE (ongoing), Shahjalal University of Science & Technology B.Sc. (Engg.) in CSE, Shahjalal University of Science & Technology",
    cellPhone:"+8801914487146",
    email:"ahq.cse@gmail.com",
},
{
    id:"08",
    name:"Kazi Md. Jahid Hasan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Kazi-Md.-Jahid-Hasan-.jpg",
    designation:"Lecturer (Mathematics) Advisor, Debating Club (LU)",
    department:"Computer Science & Engineering",
    biography:"S.S.C: 2004, Comilla Board, H.S.C: 2006, Comilla Board, B.Sc(Hons.), M.S.(Mathematics), SUST",
    cellPhone:"01676480060",
    email:"kjahid.sust@gmail.com",
},
{
    id:"09",
    name:"Md. Ebrahim Hossain",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/EBH.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"M.Sc. in Information Technology, Jahangirnagar University, Savar, Dhaka. B.Sc. in Information Technology, Jahangirnagar University, Savar, Dhaka.",
    cellPhone:"01733688612",
    email:"sajib.it1412@gmail.com",
},
{
    id:"10",
    name:"Md. Saiful Ambia Chowdhury",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/01/12489314_218201151851644_3803346472606839500_o.jpg",
    designation:"Lecturer Coach, Programming Contest Teams",
    department:"Computer Science & Engineering",
    biography:"M.Sc. in CSE (ongoing), Shahjalal University of Science & Technology B.Sc. in CSE (2008-09), Sylhet Engineering College. H.S.C (2008), Ispahani Public School & College S.S.C (2006), Ispahani Public School & College",
    cellPhone:"+8801718377269",
    email:"sas2505@lus.ac.bd",
},
{
    id:"11",
    name:"Debojyoti Biswas",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/01/27912865_1962963720397992_2504841248494051743_o.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"B.Sc.(Engg.) in ICE (2013-2016), Noakhali Science & Technology University H.S.C (2012), The Buds Residential Model School & College S.S.C (2010), The Buds Residential Model School & College",
    cellPhone:"01861888162",
    email:"bishaldebojyoti@gmail.com",
},
{
    id:"12",
    name:"Tonni Das Jui",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/01/31855767_942633539250930_2611705570440249344_n.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"B.Sc. in CSE, BRAC University H.S.C. Sylhet board S.S.C Sylhet board",
    cellPhone:"01682335671",
    email:"tonnijuicse@gmail.com",
},
{
    id:"13",
    name:"Mohammad Jaber Hossain",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/02/IMG_9864.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"Masters in Information Technology (Ongoing) Shahjalal University of Science & Technology BSc in Computer Science & Engineering American International University-Bangladesh HSC, Chattogram Board SSC, Chattogram Board",
    cellPhone:"01711091906",
    email:"jhsarzil120@gmail.com",
},
{
    id:"14",
    name:"Adil Ahmed Chowdhury",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/05/pic.jpeg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"M.Sc in CSE (Ongoing) at SUST, Sylhet. B.Sc in CSE at Leading University, Sylhet.",
    cellPhone:"01771852888",
    email:"adil@lus.ac.bd",
},
{
    id:"15",
    name:"Syeda Tamanna Alam Monisha",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/11/Syeda-Tajmanna-Alam-Monisha.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"B.Sc. (Engg.) in CSE, Shahjalal University of Science & Technology H.S.C, MC College, Sylhet S.S.C, Blue Bird School & College, Sylhet",
    cellPhone:"01712953999",
    email:"alammonisha@gmail.com",
},
{
    id:"16",
    name:"Md. Saidur Rahman Kohinoor",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/11/DSC_26433.jpg",
    designation:"Lecturer",
    department:"Computer Science & Engineering",
    biography:"",
    cellPhone:"01732477046",
    email:"kohinoor_cse@lus.ac.bd",
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
                        centerComponent={{ text: 'Computer Science and Engineering(CSE)', style:{color:'#fff',fontSize:16} }}
                        rightComponent={
                            <Icon iconStyle={{marginRight:5}}
                                name='notifications-active'
                                color='#fff'
                                onPress={()=>this.props.navigation.navigate('Notice')}
                            />
                        }
                />
                <FlatList
                    data={CSE}
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
