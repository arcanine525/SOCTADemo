/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

  ActivityIndicator,
  StatusBar,
  AsyncStorage

} from 'react-native';


import { StackNavigator, SwitchNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import HomeScreen from './srceen/HomeScreen'
import DetailsScreen from './srceen/Details'
import PayScreen from './srceen/Pay'
import NotificationScreen from './srceen/NotificationScreen'
import MapScreen from './srceen/MapViewScreen'
import DataScreen from './srceen/FieldsDB'
import UserScreen from './srceen/UserSreen'

import LoginScreen from './srceen/Login'
import SignUpScreen from './srceen/SignUp'
import AuthLoadingScreen from './srceen/Loading'

import AnimateSreen from './srceen/AnimationView'
// const AppStack = StackNavigator({
//   // Welcome: {screen: WelcomeScreen},
//   App: { screen: MyTab },
//   Details: { screen: DetailsScreen },
//   Pay: { screen: PayScreen }
// })

const AuthStack = StackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen }
})


// const MyApp = SwitchNavigator({
//   App: AppStack,
//   Auth: AuthStack,
//   AppLoad: LoadingScreen
// },
//   {
//     initialRouteName: 'AppLoad'
//   }
// )



const MyTab = TabNavigator({
  Home: { screen: DataScreen },
  Notification: { screen: NotificationScreen },
  Map: { screen: MapScreen },
  //DataScreen: { screen: DataScreen },
  User: { screen: UserScreen }, 

},
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
  }
)

const AppStack = StackNavigator({
  App: { screen: MyTab },
  Details: { screen: DetailsScreen },
  Pay: { screen: PayScreen }
})

const MyApp = SwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen
},
  {
    initialRouteName: 'AuthLoading'
  }
)

export default MyApp;