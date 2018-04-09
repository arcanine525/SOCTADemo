import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, Dimensions } from 'react-native'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        }
    }

    _login() {
        Alert.alert(
            'Alert Title',
            'Your Phone is ' + this.state.phoneNumber,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )

    }

    render() {
        // const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        source={require('./img/icon.png')}
                        style={styles.logo}
                    />
                </View>

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your PhoneNumber"
                    keyboardType="phone-pad"
                    onChangeText={text => this.setState({ phoneNumber: text })}
                />

                <TouchableOpacity style={styles.bigButton} onPress={() => this._login()}>
                    <Text style={styles.buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>

            </View>
        );

    }
}
//const width = Dimensions.get('window')

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,

        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },

    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontFamily: 'Avenir',
        //color: '#fff',
        fontWeight: '400'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    logo: {
        width: 256,
        height: 256
    },

    container: {
        //backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        flexDirection: 'column'
    },
})