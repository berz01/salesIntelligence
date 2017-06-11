import React, { Component } from 'react';
import { WebView, StyleSheet, View } from 'react-native';

import Nav from './global-widgets/nav'

export default class WebViewer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        <WebView
          source={{uri:'https://salesintel.herokuapp.com/api/v1/facebook/auth'}}
        />
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
    backgroundColor: '#F5FCFF'
  },
});
