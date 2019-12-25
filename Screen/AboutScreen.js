import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,FlatList } from 'react-native'
import {DrawerActions} from 'react-navigation-drawer';
import {Header,Icon} from 'react-native-elements';

const ABOUT = [{
    id:"01",
    image:"http://www.lus.ac.bd/wp-content/uploads/2015/06/chairman.jpg",
    comments:"Leading University is the first private university in Sylhet. Its a reality of my deepest dream from decades. Establishment of Leading University"+
        "is the greatest work of many other deeds in my life that I could do from the mercy of Allah. To deliver the light of modern higher education in "+
        "every pace of life, I establish the Leading University in 2001 by means of nominal fee structure. Today Leading University earned the name and fame"+
        " not only in Sylhet but also in nationwide with the greatest support and love from the people of the country.Leading University is a non-profit "+
        "educational institution. So far I am concerned all of the institutions including Leading University are doing very well and carry out their academic"+
        " activities to the highest degree of perfection and with good reputation in Bangladesh. By the leniency of Allah I also have dream to establish "+
        "Science & Technology University, more Medical Colleges as well as some schools and colleges in remote area of the country."+
        "I hope these institutions would go further to the international level in the days to come. Danobir Dr. Syed Ragib Ali"
},{
    id:"02",
    image:"http://www.lus.ac.bd/wp-content/uploads/2015/06/image-1-238x300.jpeg",
    comments:"The inauguration of Leading University (LU) on the 4th of March 2002 was a landmark in the history of higher education in Bangladesh. Initiation of the "+
    "higher education operations by Leading University in Sylhet Division opened a new horizon that marked the beginning of quality education in the northeast region "+
    "of Bangladesh. The university intends to maintain the benchmark of world class education. The university offers eight undergraduate programs and seven graduate "+
    "programs under four faculties namely Faculty of Business Administration, Faculty of Arts & Modern Language, Faculty of Modern Science and Faculty of Social Science. "+
    "Eight undergraduate programs are BBA (Hons), BA (Hons) in English, LLB (Hons), BSc (Hons) in Computer Science and Engineering, BSc (Hons) in Electrical & Electronics "+
    "Engineering, BSc in Civil Engineering, Bachelor of Architecture and BA (Hons) in Islamic Studies. Graduate academic programs include MBA (Regular), MBA (Executive), "+
    "MA in English (Preli), MA in English (Final), Master in Law (LLM), MA in Islamic Studies and Master in Public Health (MPH). In order to diversify its educational "+
    "arena further, the university is going to open very soon the disciplines like Information Technology (IT), Tourism and Hospitality Management, Tea Technology, "+
    "Pharmacy and other innovative disciplines. This will lead to fulfill the   needs of the society as well as to attain the dynamism of new areas of learning."+
    "Leading University has already gained its reputation in the job market with respect its quality of education and performed other vibrant activities that would "+
    "contribute towards development of different corners of the society. Graduates who passed out from this institution are well placed in various responsible positions "+
    "in the job market and are made significant contributions for the development of the country."+
    "May Almighty Allah enable us to develop Leading University further in the days to come to attain a sustainable growth that would be dedicated to the enlightenment of "+
    "the people of the region. Professor Dr. Md. Qumruzzaman Chowdhury Vice-ChancellorLeading University, Sylhet."
}];

export default class About extends Component {
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
                    centerComponent={{ text: 'About', style: { color: '#fff' } }}
                    rightComponent={
                        <Icon iconStyle={{marginRight:5}}
                            name='notifications-active'
                            color='#fff'
                            onPress={()=>this.props.navigation.navigate('Notice')}
                        />
                    }
                />
                <FlatList
                    data={ABOUT}
                    renderItem={({item,index}) =>
                    <View style={{alignItems:'center',backgroundColor:"#f5f5f5"}}>
                        <Image source={{uri:item.image}} 
                            style={{height:200,width:200,borderRadius:100,margin:20,borderColor:"#bdb9b7",borderWidth:2}} resizeMode='cover'/>
                        <Text style={{marginHorizontal:16,fontSize:18,marginBottom:50}}>{item.comments}</Text>
                    </View>
                    }
                    ListFooterComponent={
                        <View style={{padding:40}}>

                        </View>
                    }
                />
                
            </View>
        )
    }
}
