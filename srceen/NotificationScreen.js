import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Container, Content, Footer, FooterTab, Button, Icon, Header, Text } from 'native-base';
import * as Animatable from 'react-native-animatable';

export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLable: 'Notification',
    tabBarIcon: ({ focused, tintColor }) => { return <Icon name="ios-chatbubbles" style={{ color: tintColor }} /> }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animatable.View animation="fadeIn" direction="alternate">    
          <Text style={{ fontFamily: 'Luna', fontSize: 14 }}>Coming Soon!</Text>
        </Animatable.View >
      </View>
    );
  }
}
