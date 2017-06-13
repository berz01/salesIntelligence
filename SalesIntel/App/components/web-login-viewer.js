import React, { Component } from 'react';
import { WebView, StyleSheet, View } from 'react-native';
import Nav from './global-widgets/nav';

const LOCAL_STORE_KEYS = require('../containers/storagekeys');

export default class WebViewer extends Component {

  checkValidToken(){
      fetch('https://salesintel.herokuapp.com/api/v1/facebook/token')
      .then(response => response.json())
      .then(function(data){
          var token = data;
          console.log("TOKEN:", token);

          var expiredTimestamp = new Date().getTime() - (2 * 60 * 60 * 1000);
          var timestamp = token.split(':')[0];

          console.log("EXPIRED TIMESTAMP:", timestamp);
          console.log("TIMESTAMP:", timestamp);

          if(expiredTimestamp < timestamp){
            AsyncStorage.setItem(LOCAL_STORE_KEYS.FacebookToken, token)
            .then(function(){
              this.props.navigator.pop();
            })
            .catch((error) => {
              console.log(error);
            });
          }
      })
      .catch(function(error){
        console.log("You suck:", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        <WebView
          onLoadEnd={this.checkValidToken}
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
