import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListViewScreen from './ListView'
import DetailsScreen from './Details'


const AppStack = StackNavigator({
    ListView: { screen: ListViewScreen },
    Details: { screen: DetailsScreen }
})
export default AppStack;