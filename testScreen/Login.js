import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PhoneNumber: '0916240346',
            Password: '123'
        }
    }

    static navigationOptions = {
        title: 'Please sign in'
    }

    _login() {
        Alert.alert(
            'Alert Title',
            'Your Phone is ' + this.state.PhoneNumber,
            'Your Password is ' + this.state.Password,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
        //this.props.navigation.navigate('App', { id: this.state.PhoneNumber })
    }
    render() {
        return (
            <View style={styles.container}>

                <Text>Your Phone Number</Text>
                
                <TextInput onChangeText={(PhoneNumber) => this.setState({ PhoneNumber })}
                    value={this.state.PhoneNumber} />

                <TextInput onChangeText={(Password) => this.setState({ Password})}
                    value={this.state.Password} />
                <Button title='Log In With Phone'
                    onPress={() => { this._login() }}
                />



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