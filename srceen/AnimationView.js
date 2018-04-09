import React, { Component } from 'react';
import { Alert, TouchableOpacity, Linking, Image, StyleSheet, View, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class UserSrceen extends Component {
    render() {
        return (
            <View>
                <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
            </View>
        )
    }

}