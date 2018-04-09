import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AppStack from '../testScreen/Tab'

/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
*/
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


export default TabNavigator({
  Home: { screen: AppStack },
  Welcome: { screen: SettingsScreen },
},
  {
    tabBarPosition: 'bottom',
    
  });