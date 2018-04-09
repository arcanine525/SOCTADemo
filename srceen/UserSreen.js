import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button, Body, Icon } from 'native-base';
import { Alert, TouchableOpacity, Linking, Image, StyleSheet, View, AsyncStorage, Dimensions } from 'react-native';
import { firebaseApp } from '../FireBase/FireBaseConfig.js'
import * as firebase from 'firebase'
import { Col, Row, Grid } from "react-native-easy-grid";
import { material, iOSColors, systemWeights } from 'react-native-typography'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get("window");

export default class UserSrceen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: 'Hi'
    }

  }
  static navigationOptions = {
    header: null,

    tabBarLable: 'User',
    tabBarIcon: ({ focused, tintColor }) => { return <Icon name="ios-person" style={{ color: tintColor }} /> }

  }
  _loadUserAsync = async () => {
    const userToken = await AsyncStorage.getItem('Login');

    this.setState({
      UserName: userToken
    })

  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  componentDidMount() {
    this._loadUserAsync()
  }
  render() {

    return (
      <Container>
        <Content>
          <Grid>
            <Row size={3}>
              <Content>
                <Animatable.View animation="slideInDown" direction="alternate">
                  <Image
                    resizeMode="contain"
                    style={{ height: 200, width: width, flex: 1, marginTop: 50 }}
                    source={require('../assets/img/ic_user.png')}
                  />
                  <Body>
                    <Text style={{ fontFamily: 'Luna', fontSize: 17 }}>{this.state.UserName}</Text>
                  </Body>
                </Animatable.View>

              </Content>
            </Row>

            <Row size={1}>
              <Content style={{ marginTop: 15 }}>
                <Body>
                  <Animatable.View animation="lightSpeedIn" direction="alternate">
                    <Button rounded onPress={this._signOutAsync}>
                      <Text>Sign Out</Text>
                    </Button>
                  </Animatable.View>
                </Body>
              </Content>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
};



