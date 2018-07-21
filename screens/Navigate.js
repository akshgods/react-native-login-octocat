import React, { Component } from 'react';
import { createStackNavigator,createSwitchNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";

const appStack=createStackNavigator({
    HomeScreen:{
        screen: HomeScreen
      },
})

const appAuth=createStackNavigator({
    LoginScreen:{
        screen: LoginScreen
      }
})

export default createSwitchNavigator({
    Auth:appAuth,
    App:appStack,
    AuthLoading:AuthLoadingScreen
},
{
    initialRouteName: 'AuthLoading',
}

)
