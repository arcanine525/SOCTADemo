import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button, Body, Icon } from 'native-base';
import { Alert, TouchableOpacity, Linking, Image, StyleSheet, View } from 'react-native';
import { firebaseApp } from '../FireBase/FireBaseConfig.js'
import * as firebase from 'firebase'
import { Col, Row, Grid } from "react-native-easy-grid";
import { material, iOSColors, systemWeights } from 'react-native-typography'
import * as Animatable from 'react-native-animatable';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    static navigationOptions = {
        header: null,
        /*
        tabBarLable: 'Notification',
        tabBarIcon: ({ focused, tintColor }) => { return <Icon name="ios-pin" style={{ color: tintColor }} /> }
        */
    }
    _register() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.name, this.state.password)
            .then(() => {
                Alert.alert(
                    '',
                    'Your Email is ' + this.state.name,
                    [
                        { text: 'OK', onPress: () => { this.props.navigation.navigate('Login') } },
                    ],
                    { cancelable: false }
                )

            }).
            catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                Alert.alert(
                    '',
                    'Failed: ' + errorMessage,

                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            });
    }

    render() {
        return (
            <Container  >
                <Content >
                    <Grid>
                        <Row size={50}>

                            <Content >
                                <Animatable.View animation="lightSpeedIn" direction="alternate">
                                    <Image
                                        resizeMode="contain"
                                        style={{ height: 200, width: null, flex: 1, marginTop: 50 }}
                                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/soctademo.appspot.com/o/if_Games_-_Soccer_82274.png?alt=media&token=df05e21b-246f-4d43-96c9-8e30b56ed61e' }}
                                    />
                                    <Body>
                                        <Text style={{ fontFamily: 'Luna', fontSize: 31 }}>Sign up</Text>
                                    </Body>
                                </Animatable.View >
                            </Content>

                        </Row>

                        <Row size={30}>
                            <Content>
                            <Animatable.View animation="bounceInRight" direction="alternate">
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Username</Label>
                                        <Input
                                            onChangeText={(name) => this.setState({ name })}
                                            value={this.state.name}
                                        />

                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>Password</Label>
                                        <Input
                                            secureTextEntry
                                            onChangeText={(password) => this.setState({ password })}
                                            value={this.state.password}
                                        />
                                    </Item>
                                </Form>
                                </Animatable.View >
                            </Content>
                        </Row>

                        <Row size={20}>
                            <Content style={{ marginTop: 25 }}>
                                <Animatable.View animation="bounceInRight" direction="alternate">
                                    <Body>
                                        <Button rounded style={{ width: 200 }}
                                            onPress={() => { this._register() }}
                                        >
                                            <Body>
                                                <Text style={systemWeights.semibold}>Register</Text>
                                            </Body>
                                        </Button>
                                    </Body>
                                </Animatable.View >
                            </Content>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
};



