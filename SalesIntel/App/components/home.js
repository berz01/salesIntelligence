/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.base}>
      <Nav toProfile = {() => this.props.navigator.replace({id:'profile'})} />
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Calendar Landing Page Here
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
