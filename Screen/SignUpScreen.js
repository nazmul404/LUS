import React, { Component } from 'react'
import { Text,StyleSheet,TextInput,Dimensions,KeyboardAvoidingView, Alert, ActivityIndicator,View} from 'react-native';
import * as firebase from 'firebase'

const {height,width} = Dimensions.get('window');

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            id:'',
            password:'',
            isValidEmail:true,
            isValidPassWord:true,
            isFormValid:true,
            loading:false
        }
    }

    checkEmail=() => {
        const {email,isValidEmail} = this.state;
        const emailRegax= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({
            isValidEmail: emailRegax.test(String(email).toLocaleLowerCase())
        })       
    }

    checkPassword=()=> {
        if (this.state.password.length<6) {
            this.setState({
                isValidPassWord:false
            })
            return;
        }
        else {
            this.setState({
                isValidPassWord:true
            })
        }
    }

    signUp=()=> {
        const {name,email,id,password,isFormValid} = this.state;
        if (name.length<=0 || email.length<=0 || id.length<10 || password.length<6) {
            console.log("Parsed");
            this.setState({
                isFormValid:false
            })
            return;
        }
        else {
            this.setState({
                isFormValid:true
            })
        }
        // console.log("Name:",name," Email:",email," Id:",id," Password:",password);

        if (isFormValid) {
            this.setState({
                loading:true
            })

            // console.log("Name:",name.length," Email:",email.length," Id:",id.length," Password:",password.length, isFormValid);
            firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then((user)=> {
            firebase
            .database()
            .ref('users/'+ user.user.uid)
            .set({
                id,
                email,
                name,
                password
            });
        })
        .then(()=> {
            this.setState({
                loading:false
            })
        })
        .then(()=> {
            Alert.alert("Account Created Successfully");
        })
        .then(()=>{this.props.navigation.navigate("Login")})
        }


    }


    render() {
        const {name,email,id,password,isFormValid,isValidEmail,isValidPassWord,loading} = this.state;
        
        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator style={{flex:1,alignSelf:'center',justifyContent:'center'}} size='large'/>}
                {/* <Text style={{fontSize:55,color:'#616161'}}>Leading University</Text> */}
            
                <Text style={{fontSize:50}}>Welcome,</Text>
                <Text style={{fontSize:35,color:'#bdbdbd'}}>sign up to continue</Text>
                
                    <TextInput style={{borderBottomWidth:1.7,borderBottomColor:"#ed407a",width:width-65,marginTop:50,fontSize:14,paddingBottom:5}}
                        placeholder="NAME"
                        onChangeText={(name)=>this.setState({name:name})}
                    />
                    <TextInput style={{borderBottomWidth:1.8,borderBottomColor:"#ed407a",width:width-65,marginTop:35,fontSize:14,paddingBottom:5}}
                        placeholder="EMAIL"
                        autoCompleteType='email'
                        onChangeText={(email)=>this.setState({email:email})}
                        onBlur={this.checkEmail}
                    />
                    {!isValidEmail && <Text style={{fontSize:14,color:'red',marginTop:5}}>Please Enter A Valid Email</Text>}
                    <TextInput style={{borderBottomWidth:1.9,borderBottomColor:"#ed407a",width:width-65,marginTop:35,fontSize:14,paddingBottom:5}}
                        placeholder="STUDENT ID"
                        onChangeText={(id)=>this.setState({id:id})}
                    />
                    <TextInput style={{borderBottomWidth:2,borderBottomColor:"#ed407a",width:width-65,marginTop:35,fontSize:14,paddingBottom:5}}
                        placeholder="PASSWORD"
                        onChangeText={(password)=>this.setState({password:password})}
                        secureTextEntry={true}
                        onFocus={this.checkPassword}
                        onBlur={this.checkPassword}
                    />
                    {!isValidPassWord && <Text style={{fontSize:14,color:'red',marginTop:5}}>Password should contain at least 6 character</Text>}
                    {!isFormValid && <Text style={{fontSize:14,color:'red',marginTop:5}}>Please Fill Up Form Correctly.</Text>}
                

                <Text style={{color:'#ed407a',fontSize:36,fontWeight:'bold',marginTop:50}}
                    onPress={this.signUp}>
                    Sign Up
                </Text>
            
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginHorizontal:32,
        marginTop:height/14
    }
})