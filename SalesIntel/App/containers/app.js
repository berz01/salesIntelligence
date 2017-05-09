
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';


import Root from '../components/root'; 

export default class Index extends Component {
  render() {
    return (
      <View
       style={{flex:1}}>
        <Root />
      </View>);
  }
}
