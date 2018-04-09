import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Header, Text } from 'native-base';
import MyData from '../src/data/FieldsData'

class FlatListItem extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View>
                    <Image
                        resizeMode='contain'
                        source={{ uri: this.props.item.pic }}
                        style={styles.itemImage} />
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.des}</Text>
                </View>

            </View>
        )
    }
}

export default class AppScreen extends Component {

    static navigationOptions = {
        tabBarLable: 'Home',
        tabBarIcon: ({ focused, tintColor }) => { return < Icon name="ios-home" style={{ color: tintColor }} /> }
    }

    render() {

        //PASSING PARAMS
        //    const { params } = this.props.navigation.state;
        //    const phone = params.phone

        return (
            <Container>
                <Content>
                    <FlatList
                        data={MyData}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Details', { itemDetail: item }) }}>

                                    <FlatListItem item={item}></FlatListItem>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </Content>
            </Container>


        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    itemImage: {
        height: 100,
        width: 150,
        margin: 5
    }

});
