import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,Image } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';
import CardFaculty from '../Component/common/CardFaculty';

const BBA =[{
    id:"01",
    name:"Dr. Wahiduzzaman Khan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/05/wahiduzzaman.jpg",
    designation:"Associate Professor",
    department:"Head Business Administration",
    biography:"Ph.D, Rajshahi University, Awarded 2016 MBA, Rajshahi University, 2005 CSE Scholar, Shanghai, China, "+
    "2010 BBA, Rajshahi University, 2004 H.S.C, Govt. M.M. City College, 1998 S.S.C, Khulna Zilla School, 1996",
    cellPhone:"01939993399",
    email:"wzk_roence@yahoo.co.uk",
},
{
    id:"02",
    name:"Mohammad Shahansha Molla",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/03/17554973_10154367726921500_939996541_n.jpg",
    designation:"Assistant Professor",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"",
    email:"shahansha06@yahoo.com",
},
{
    id:"03",
    name:"Md. Jahangir Alam",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/img20090908063101.jpg",
    designation:"Assistant Professor (Marketing)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"+8801711009899",
    email:"jalam160@yahoo.com",
},
{
    id:"04",
    name:"Musa. Halima Begum",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/musa-halima-begum.jpg",
    designation:"Assistant Professor (Sociology)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01913946475",
    email:"musa.halimabegum@yahoo.com",
},
{
    id:"05",
    name:"Shamsu Uddin",
    image:"https://www.lus.ac.bd/wp-content/uploads/2016/05/13220008_10153560835416500_560054281_n.jpg",
    designation:"Assistant Professor (Marketing)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01195399384",
    email:"sushakib@yahoo.com",
},
{
    id:"06",
    name:"Dr. Md. Rashedul Azim, , ACS",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/04/RAZ-.jpg",
    designation:"Assistant Professor ( AIS) & Coordinator",
    department:"Head Business Administration",
    biography:"Ph. D. (CU) M.Phil ( CU) Qualified Chartered Secretaries ( Institute of Chartered "+
    "Secretaries of Bangladesh )Post Graduate Diploma in Management (PGDM)  (Open University) Post Graduate Diploma in "+
    "Human Research Management  ( IPMB) M. COM. (Accounting), CU M. COM. (Management), NU B. COM. (Hons) (Accounting), CU",
    cellPhone:"01716599135",
    email:" rashedazim9@gmail.com",
},
{
    id:"07",
    name:"Anwar Ahmad Arif",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/anwar-ahmed-arif_0005.jpg",
    designation:"Assistant Professor",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01712661446",
    email:"aaarif@lus.ac.bd",
},
{
    id:"08",
    name:"Wahida Akther",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Wahida-Akther.jpg",
    designation:"Assistant Professor (AIS)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01819538975",
    email:"wahidaala@gmail.com",
},
{
    id:"09",
    name:"Md. Shamimul Islam",
    image:"https://www.lus.ac.bd/wp-content/uploads/2018/09/23376328_1764874993522878_2936778151980511513_n.jpg",
    designation:"Assistant Professor (HRM)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01918942572",
    email:"mshamim09@gmail.com",
},
{
    id:"10",
    name:"Mohammad Zahed Hossain",
    image:"https://www.lus.ac.bd/wp-content/uploads/2018/09/23376328_1764874993522878_2936778151980511513_n.jpg",
    designation:"Assistant Professor (Finance & Banking)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"",
    email:"zahedbtc@gmail.com",
},
{
    id:"11",
    name:"Tahmina Khanom",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/tahmina-khanom.jpg",
    designation:"Assistant Professor (Finance & Accounting)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01715610930",
    email:"tmm87@live.com",
},
{
    id:"12",
    name:"Iehit Sharma",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/iehit-sharma_0010.jpg",
    designation:"Lecturer Accounting",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01819848464",
    email:"iehitnipu09@gmail.com",
},
{
    id:"13",
    name:"Md. Hafizur Rahman Khan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Hafizur-Rahman-Khan.jpg",
    designation:"Lecturer (Finance)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01737401135",
    email:"hrk128@gmail.com",
},
{
    id:"14",
    name:"Md. Abdul Muhith Chowdhury",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/Abdul-Muhit-Chy.jpg",
    designation:"Lecturer (HRM)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"+8801911528681",
    email:"muhith@lus.ac.bd",
},
{
    id:"15",
    name:"Farhad Hossain",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/02/IMG_20170119_101518-1-1.jpg",
    designation:"Lecturer (HRM)",
    department:"Head Business Administration",
    biography:"MBA from University of Dhaka  (Major on HRM) BBA from University of Dhaka",
    cellPhone:"01611504166",
    email:"farhad@lus.ac.bd",
},
{
    id:"16",
    name:"Md. Asraful Islam Chowdhury",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/05/IMG_20161124_201945.jpg",
    designation:"Lecturer (Management)",
    department:"Head Business Administration",
    biography:"",
    cellPhone:"01823152929",
    email:"ashrafulchowdhury@lus.ac.bd",
},
{
    id:"17",
    name:"Shahedul Alam Khan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/08/Photo.jpg",
    designation:"Lecturer Advisor, Orpheus",
    department:"Business Administration",
    biography:"BBA (Management) and MBA (Strategic & International Management), Faculty of Business Studies, University of Dhaka.",
    cellPhone:"+8801670565548",
    email:"shahed_shuvo@yahoo.com",
},
{
    id:"18",
    name:"Chowdhury Tabassum Shakila",
    image:"https://www.lus.ac.bd/wp-content/uploads/2016/03/chy-tabassum-sakila.jpg",
    designation:"Lecturer (Accounting) Advisor, Cultural Club (LU)",
    department:"Business Administration",
    biography:"",
    cellPhone:"01717567346",
    email:"eva.dace@yahoo.com",
},
{
    id:"19",
    name:"Najia Jahura Joni",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Najia-Jahura-Joni.jpg",
    designation:"Lecturer (AIS)",
    department:"Business Administration",
    biography:"",
    cellPhone:"01913586897",
    email:"najiajahura@gmail.com",
},
{
    id:"20",
    name:"Md. Rashidul Hasan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2019/09/pic.jpg",
    designation:"Lecturer (Statistics)",
    department:"Business Administration",
    biography:"",
    cellPhone:"01728885514",
    email:"rashidulhasan067@gmail.com",
},
{
    id:"21",
    name:"Tahrima Chowdhury Jannath",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/IMG1.jpg",
    designation:"Lecturer (AIS) Advisor, LUMUNA",
    department:"Business Administration",
    biography:"",
    cellPhone:"",
    email:"tahrimachy@lus.ac.bd",
},
{
    id:"22",
    name:"Jaynob Sarker",
    image:"https://www.lus.ac.bd/wp-content/uploads/2015/11/Joynob-Sarker.jpg",
    designation:"Lecturer (AIS)",
    department:"Business Administration",
    biography:"",
    cellPhone:"01683931272",
    email:"kantajnu@gmail.com",
},
{
    id:"23",
    name:"Md. Mahbobor Rahaman",
    image:"https://www.lus.ac.bd/wp-content/uploads/2018/04/28070923_2072810712733479_2568141873001343776_o.jpg",
    designation:"Lecturer (MIS)",
    department:"Business Administration",
    biography:"Masters of Business Administration (M.B.A) Major in Management Information Systems (MIS) Institution: Faculty of Business Studies(FBS) University of Dhaka,Bangladesh.",
    cellPhone:"+8801723347110",
    email:"mahbobdumis@lus.ac.bd",
},
{
    id:"24",
    name:"Md. Sajadul Islam Sarker",
    image:"https://www.lus.ac.bd/wp-content/uploads/2017/02/picture.jpg",
    designation:"Lecturer (Finance)",
    department:"Business Administration",
    biography:"",
    cellPhone:"01725356173",
    email:"sajadul.comilla@gmail.com",
},
{
    id:"25",
    name:"Fatama Yesmin Khan",
    image:"https://www.lus.ac.bd/wp-content/uploads/2018/01/Fatama-Yesmin-Khan.jpg",
    designation:"Lecturer",
    department:"Business Administration",
    biography:"",
    cellPhone:"01781880553",
    email:"fatusamkhan@gmail.com",
},]

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
                        centerComponent={{ text: 'Bachelor of Business Administration(BBA)', style:{color:'#fff',fontSize:15}}}
                        rightComponent={
                            <Icon iconStyle={{marginRight:5}}
                                name='notifications-active'
                                color='#fff'
                                onPress={()=>this.props.navigation.navigate('Notice')}
                            />
                        }
                />
                 <FlatList
                    data={BBA}
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