import React, { Component } from 'react';
import { Container, Header, Content, Title, Form, Item, Input, Label, Text, View, Card, CardItem, Body, Left, Right, Icon, Button, List, ListItem, H2, H3, Spinner } from 'native-base';
import { Alert, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { firebaseApp } from '../FireBase/FireBaseConfig.js'
import * as firebase from 'firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get("window");

export default class DataBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            name: '',
            description: '',
            price: '',
            loading: 'true'
        }
    }
    static navigationOptions = {
        //title: 'Details',
        header: null,
        tabBarLable: 'Home',
        tabBarIcon: ({ focused, tintColor }) => { return < Icon name="ios-home" style={{ color: tintColor }} /> }
    }

    _addField(newName, newDescription) {
        if (this.state.name.trim() == '') {
            Alert.alert(
                'Alert Title',
                'Please enter field name',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
            return
        }
        this.setState({
            name: '',
            description: ''
        });

        firebase.database().ref('Fields/').push({
            name: newName,
            description: newDescription,

        });

        Alert.alert(
            'Alert Title',
            'ADDED ' + newName,

            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    componentDidMount() {
        firebase.database().ref('Fields/').on('value', (childSnapshot) => {
            const fields = [];
            childSnapshot.forEach((data) => {
                fields.push({
                    key: data.key,
                    name: data.toJSON().name,
                    description: data.toJSON().description,
                    price: data.toJSON().price,
                    pic: data.toJSON().pic,
                    pos: data.toJSON().pos,
                    phone: data.toJSON().phone
                });

                this.setState({
                    fields: fields,
                    loading: 'false'
                });

            });
        });
    }


    render() {
        if (this.state.loading == 'true') {
            return (

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Spinner color='red' />

                </View>
            )
        } else {
            return (
                <Container>
                    <Content>

                        {/* <Form>
                            <Item floatingLabel>
                                <Label>New Field Name</Label>
                                <Input
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                />
    
                            </Item>
                            <Item floatingLabel last>
                                <Label>Description</Label>
                                <Input
                                    onChangeText={(description) => this.setState({ description })}
                                    value={this.state.description}
                                />
                            </Item>
    
                        </Form>
    
                        <Button full
                            onPress={() => { this._addField(this.state.name, this.state.description) }}
                        >
                            <Text>Add Field</Text>
                        </Button> */}

                        <Text style={{ fontFamily: 'Luna', fontSize: 24 }}>Pick your field</Text>

                        <FlatList

                            data={this.state.fields}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('Details', { itemDetail: item }) }}
                                    >

                                        <Card>

                                            <CardItem cardBody>
                                                <Image
                                                    resizeMode="stretch"
                                                    source={{ uri: item.pic }}
                                                    style={{ height: height / 3, width: width, flex: 1 }} />

                                            </CardItem>
                                            <CardItem>
                                                <Left>
                                                    <Content>
                                                        <Text style={systemWeights.light}>{item.name}</Text>
                                                        <Text style={material.caption}>{item.pos}</Text>
                                                    </Content>
                                                </Left>

                                                <Right>
                                                    <CardItem>
                                                        <Text style={[styles.red, systemWeights.semibold]}>{item.price}
                                                            <Text style={[styles.red, systemWeights.semibold]}> đ</Text>
                                                        </Text>
                                                    </CardItem>
                                                </Right>
                                            </CardItem>

                                        </Card>


                                    </TouchableOpacity>
                                )
                            }}>
                        </FlatList>

                    </Content>
                </Container>
            );
        }


    }
}

const styles = StyleSheet.create({
    red: {
        color: iOSColors.red,
    },
});
