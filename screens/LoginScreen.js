//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity, StyleSheet,Image,Platform,Dimensions,Animated } from 'react-native';
import * as Animatable from "react-native-animatable";
import LoginForm from "../components/LoginForm";
// create a component
const SCREEN_HEIGHT=Dimensions.get('window').height;

//make customAnimation
const mySlideOutDown = {
    from: {
      translateY: - (SCREEN_HEIGHT),
      opacity:0
    },
    to: {
      translateY: 0,
      opacity:1
    }
}

const mySlideInUp = {
    from: {
      translateY: SCREEN_HEIGHT,
      opacity:0
    },
    to: {
      translateY: 0,
      opacity:1
    }
}

function makeSlideOutTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: 0,
      opacity:1
    },
    to: {
      [translationType]: fromValue,
      opacity:0
    },
  };
}

 const slideOutUpCustom = makeSlideOutTranslation('translateY', -100);

Animatable.initializeRegistryWithDefinitions({
  mySlideInUp: mySlideInUp,
  mySlideOutDown: mySlideOutDown,
  slideOutUpCustom:slideOutUpCustom
});
//custom animation End

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  static navigationOptions={
    header:null
  }
   octacatAnimationEnd=()=>{
    // alert('animation End');
    this.refs.octacatLogo.swing(2000).then(endState => endState.finished ? this.octacatAnimationEnd() : '');
    this.refs.easywaytext.slideOutUpCustom(2000);
  }
  render() {
    return (
      <View style={ styles.container}>
        <View style={styles.logoContainer}>
         <Animatable.Text ref="easywaytext" style={{opacity:0}}>
            ^        ^
            </Animatable.Text>
        <Animatable.View ref='octacatLogo'  animation="mySlideInUp" duration={1000} iterationCount={1} style={styles.octacatContainer}>
          <Image style={styles.logo} source={require('../assets/Octocat.png')} />
          <Text style={styles.octacatText}>Welcome to Easyway.io login</Text>
        </Animatable.View>
      </View>
        <Animatable.View onAnimationEnd={()=>this.octacatAnimationEnd()} animation="mySlideOutDown" delay={1000} duration={1000} iterationCount={1} style={{
    padding:20,
    opacity:1
  }}>
          <LoginForm />
        </Animatable.View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#54a0ff',
  },
  logoContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow:1,
  },
  logo: { width: 100, height: 100 },
  octacatContainer:{
  justifyContent:'center',alignItems:'center'
  },
  octacatText:{
    color:'#ffffff',opacity:0.8,fontWeight:'700',marginTop:10
  },
});

//make this component available to the app
export default LoginScreen;
