//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

// create a component
class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:""
        }
    }
    static navigationOptions={
        header:<View><Text>Easyway</Text></View>
    }
    send=()=>{
        alert(this.state.msg);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <TextInput 
                onChangeText={(msg)=>this.setState({msg})}
                />
                <TouchableOpacity onPress={()=>{
                    this.send()
                }} style={styles.loginContainer}>
                    <Text style={styles.loginText}>Send</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default HomeScreen;
