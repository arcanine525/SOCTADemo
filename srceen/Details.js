import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Left, Icon, Body, Title, Right, Footer, Button, Fab, Card, CardItem, Spinner, List, ListItem } from 'native-base';
import { material, iOSColors, systemWeights } from 'react-native-typography';
import Communications from 'react-native-communications';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get("window");

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            description: '',
            pos: '',
            price: '',
            pic: '',
            phone: '',
            loading: 'true'
        }
    }

    static navigationOptions = {
        title: 'Details',
        //header: null

    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            name: params.itemDetail.name,
            description: params.itemDetail.description,
            pos: params.itemDetail.pos,
            pic: params.itemDetail.pic,
            price: params.itemDetail.price,
            phone: params.itemDetail.phone,
            loading: 'false'
        })
    }

    render() {

        //PASSING PARAMS

        const { params } = this.props.navigation.state;

        if (this.state.loading == 'true') {
            return (
                <Spinner color='red' />
            )
        } else {
            return (
                <Container>
                    <Content>
                        <Card>
                            <CardItem cardBody>
                                <Image
                                    resizeMode="stretch"
                                    source={{ uri: this.state.pic }}
                                    style={{ height: height / 3, width: width, flex: 1 }} />
                            </CardItem>

                            <CardItem>

                                <Left>
                                    <Content>
                                        <Text style={material.title}>{this.state.name}</Text>
                                        <Text style={material.caption}>{this.state.pos}</Text>
                                        {/* <Text style={material.caption}>{this.state.description}</Text> */}
                                    </Content>
                                </Left>

                                <Right>
                                    <CardItem>
                                        <Text style={[material.headline, styles.red, systemWeights.semibold]}>{this.state.price}
                                            <Text style={[styles.red, systemWeights.semibold]}> đ</Text>
                                        </Text>

                                    </CardItem>
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>
                            <Content>
                                <List>

                                    <ListItem icon>
                                        <Left>
                                            <Icon name="ios-checkmark-circle-outline" style={{ color: 'green' }} />
                                        </Left>
                                        <Body>
                                            <Text style={[systemWeights.semibold]}>Bóng dùng miễn phí.</Text>
                                        </Body>
                                    </ListItem>



                                    <ListItem icon>
                                        <Left>
                                            <Icon name="ios-checkmark-circle-outline" style={{ color: 'green' }} />
                                        </Left>
                                        <Body>
                                            <Text style={[systemWeights.semibold]}>Nước uống miễn phí.</Text>
                                        </Body>
                                    </ListItem>

                                </List>
                            </Content>

                        </Card>

                        <Fab
                            position="bottomRight"
                            onPress={() => Communications.phonecall(this.state.phone, true)}
                            style={{ backgroundColor: 'green' }}
                        >
                            <Icon name="ios-call-outline" />
                        </Fab>


                    </Content>


                    <TouchableOpacity

                        onPress={() => this.props.navigation.navigate('Pay', { payInfo: params.itemDetail })}
                    >
                        <Footer>
                            <Content style={{ marginTop: 15 }}>
                                <Body>
                                    <Text style={systemWeights.bold}>Go to Payment</Text>
                                </Body>
                            </Content>
                        </Footer>
                    </TouchableOpacity>
                </Container>
            )
        }
    }
}

const styles = StyleSheet.create({
    red: {
        color: iOSColors.red,
    },
});



