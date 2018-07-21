//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet,StatusBar,AsyncStorage} from 'react-native';
import { withNavigation  } from 'react-navigation';

// create a component
class LoginFrom extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'testt3871@gmail.com',
            password:'Wg.12345'
        }
    }
    loginSubmit=()=>{
// 'http://expense.easyway.io/app_api/login.php?name=ganesh&email=testt3871@gmail.com&mobile=123456789&password=Wg.12345'            
// alert(this.state.email);
        fetch(
'http://expense.easyway.io/app_api/login.php?email='+this.state.email+'&password='+this.state.password,{
method:'GET',
headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
//   ,
//   body: JSON.stringify({
//     email: 'testt3871@gmail.com',
//     password: 'Wg.12345',
//   })
        })
        .then((response)=>{
            console.log('response ',response);
           return response.json();
        })
        .then((res)=>{
            console.log(res);
            if(res.msg=='success')
            {
                AsyncStorage.setItem('email',res.data.email);
                AsyncStorage.setItem('mobile',res.data.mobile);
                AsyncStorage.setItem('name',res.data.name);
                 AsyncStorage.setItem('login','true');
                this.props.navigation.navigate('HomeScreen');
            }else{
                alert('not login');
            }
        })
        .catch((error) => {
            console.error(error);
         })
        .done();

        // alert('login');
    }
    componentDidMount(){
        // this._loadInitialState().done() ;
    }
    _loadInitialState=async () =>{
try {
  let login=  await AsyncStorage.getItem('login');
  if(login !== null)
  {
      this.props.navigation.navigate('HomeScreen');
  }
} catch (error) {
    
}
}    

render() {
        return (
            <View style={styles.container}>
            <StatusBar
            backgroundColor="#2e86de"
     barStyle="light-content"
            />
            {/* <TextInput
            placeholder="Mobile Number"
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            onChangeText={(x)=>{
                this.state.username
            }}
            onSubmitEditing={()=>{
                this.loginSubmit()
            }}
            /> */}
                <TextInput
                placeholder="Your email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                style={styles.input}
                returnType="next"
                keyboardType="email-address"
                defaultValue="testt3871@gmail.com"
                onChangeText={(email)=>
                        this.setState({email})
                    }
                    onSubmitEditing={()=>{
                        this.refs.pass.focus();
                    }}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    secureTextEntry
                   returnType="go"
                   ref="pass"
                   defaultValue="Wg.12345"
                   onChangeText={(password)=>
                    this.setState({password})
                }
                   onSubmitEditing={()=>{
                    this.loginSubmit()
                }}
                />
                <TouchableOpacity onPress={()=>{
                    this.loginSubmit()
                }} style={styles.loginContainer}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        paddingHorizontal:20,
        color:'#ffffff'
    },
    loginContainer:{
     alignItems:'center',
        backgroundColor:'#2e86de',
        paddingVertical:15
    },
    loginText:{
        color:'#ffffff',
        fontWeight:'700',
    }
});

//make this component available to the app
export default withNavigation(LoginFrom);
