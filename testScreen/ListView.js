import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';


export default class ListView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is ListView</Text>

                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />

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
