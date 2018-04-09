import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Alert, TouchableOpacity, Button } from 'react-native';
import { firebaseApp } from '../FireBase/FireBaseConfig.js'
import * as firebase from 'firebase'



export default class DataBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }



    _addUser(name, email, imageUrl) {
        this.setState({
            name: '',
            description: ''
        });

        firebase.database().ref('Users/').push({
            username: name,
            email: email,
            profile_picture: imageUrl
        });

        Alert.alert(
            'Alert Title',
            'ADDED ' + name,

            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <Container>

                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
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



                    <Button title='Data'
                        onPress={() => { this._addUser(this.state.name, this.state.description, 'zxcqwe') }}
                    />

                </Content>
            </Container>
        );
    }
}