import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class Pay extends Component {
    static navigationOptions = {
        title: 'Payment Info'
    }


    render() {
        //PASSING PARAMS
        const { params } = this.props.navigation.state;


        return (
            <View style={styles.container}>
                <Text>This Payment Page</Text>
                <Text>{params.payInfo.name}</Text>
                <Text>{params.payInfo.price}</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
