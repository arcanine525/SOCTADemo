import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';

import { StackNavigation } from 'react-navigation'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PhoneNumber: '0916240346'
        }
    }

    static navigationOptions = {
        title: 'Please sign in'
    }

    _login() {
        this.props.navigation.navigate('Welcome',{ PhoneNumber: this.state.PhoneNumber })
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text>Hello World!!</Text>
                    <Text>Nhập số điện thoại</Text>
                    <TextInput onChangeText={(PhoneNumber) => this.setState({ PhoneNumber })}
                        value={this.state.PhoneNumber} />
                    <Button title='Push me' onPress={() => { this._login() }}></Button>

                </View>

            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    logo: {
        width: 256,
        height: 256
    }



});
