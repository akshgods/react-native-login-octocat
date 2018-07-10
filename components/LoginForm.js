//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';

// create a component
class LoginFrom extends Component {
    loginSubmit=()=>{
        alert('login');
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
            backgroundColor="#2e86de"
     barStyle="light-content"
            />
                <TextInput
                placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="transparent"
                style={styles.input}
                returnType="next"
                    keyboardType="email-address"
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
export default LoginFrom;
