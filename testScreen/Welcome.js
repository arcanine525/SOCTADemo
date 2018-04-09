import React, { Component } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';


export default class Welcome extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }
    
    
    render() {
        //PASSING PARAMS
        const { params } = this.props.navigation.state;
       

        return (
            
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <Text>ĐĂNG NHẬP THÀNH CÔNG</Text>
                <Text>{params.id}</Text>
                </View>

            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,53,70)',
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
