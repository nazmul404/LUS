import React, { Component } from 'react'
import { Text, View,StyleSheet,ImageBackground,Image,Dimensions,ActivityIndicator,Alert,Linking} from 'react-native'
import BoxLogin from '../Component/BoxLogin'
import Button from '../Component/common/Button'
import { Input,Icon} from 'react-native-elements';
import * as firebase from 'firebase'

const {height,width} = Dimensions.get('window');

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            loading: false
        };
    }
    static navigationOptions = {
        header:null
    }

    sg=()=> {
        
    }
    signIn=()=> {

        this.setState({
            loading:true
        })

        const {email,password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email,password)
            .then(()=>{this.props.navigation.navigate("Home")})
            .then(()=> {
                this.setState({
                    loading:false
                })
            })
    }


    // signUp=(text)=> {
    //     Linking.openURL("https://www.lus.ac.bd/student-registration/");
    // }

    

    render() {
        const {loading} = this.state;
        // console.log(loading);
        return (
            <ImageBackground source={require('../assets/loginBackground.png')} style={styles.background}>
                <BoxLogin style={{marginTop:370}}>
                    <Input containerStyle={{marginBottom:20}} labelStyle={{color:'#0073D8',fontWeight:'normal'}}
                            label="Student ID"
                            placeholder="Enter Your Student ID"
                            rightIcon= {
                                <Icon iconStyle={{}}
                                    name='perm-identity'
                                    color='#0073D8'
                                    size={22} />
                                    }
                            onChangeText={(email)=>this.setState({email:email})}
                            autoCompleteType='email'
                    />
                    <Input labelStyle={{color:'#0073D8',fontWeight:'normal'}}
                            label="Password"
                            placeholder="Enter Password"
                            rightIcon= {
                                <Icon iconStyle={{}}
                                    name='lock-outline'
                                    color='#0073D8'
                                    size={22} />
                                    }
                            onChangeText={(password)=>this.setState({password:password})}
                            secureTextEntry={true}
                            // errorMessage="Invalid Email or Password"
                    />
                </BoxLogin>
                <View style={{marginTop:20,justifyContent:'space-between',flex:1}}>
                {loading ? <ActivityIndicator style={{flex:1,alignSelf:'center',justifyContent:'flex-start'}} size="large"/> :
                    <Button style={{width:width-100}} title="Sign In" onPress={this.signIn}> </Button> }
                    
                    <View style={{alignSelf:'center',flexDirection:'row',marginBottom:20}}>
                        <Text style={{margin:10, fontSize:18,color:'#4B636E',}}>Dont't have an account?</Text>
                        <Button
                            title="Sign Up"
                            onPress={()=>this.props.navigation.navigate("SignUp")}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles=StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
          height:180,
          width:180,
          marginTop:60,
          resizeMode:'contain'
      },
})
