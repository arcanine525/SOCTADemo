import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class ListView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is ListView</Text>

            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
