import React, { Component } from 'react';
import { WebView, StyleSheet, View, AsyncStorage } from 'react-native';

import Nav from '../global-widgets/nav';
import styles from './styles';

const LOCAL_STORE_KEYS = require('../../containers/storagekeys');

export default class WebViewer extends Component {
  constructor(props) {
    super(props);

    this.handleBack = (() => {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
        this.props.navigator.pop();
        return true;
      }
      return false;
    }).bind(this);
  };

  checkValidToken(){
      fetch('https://salesintel.herokuapp.com/api/v1/facebook/token')
      .then(response => response.json())
      .then((data) => {
        var token = data.fbToken;

        var expiredTimestamp = new Date().getTime() - (2 * 60 * 60 * 1000);
        var timestamp = token.split(':')[1];
        var token = token.split(':')[0];
        console.log("TOKEN:", token);

        //if(expiredTimestamp < timestamp){
          AsyncStorage.setItem(LOCAL_STORE_KEYS.FacebookToken, token)
          .then(() => {
            this.handleBack();
          })
          .catch((error) => {
            console.log(error);
          });
        //}
      })
      .catch(function(error){
        console.log("You suck:", error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        <WebView
          onLoadEnd={this.checkValidToken()}
          source={{uri: this.props.url}}
        />
      </View>
    );
  }
}
