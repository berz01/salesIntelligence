import React, { Component } from 'react';
import { WebView, StyleSheet, View } from 'react-native';
import {} from '../actions';
import Nav from './global-widgets/nav';

import Api from '';

export default class WebViewer extends Component {
  checkValidToken(){
      fetch('https://salesintel.herokuapp.com/api/v1/facebook/token')
      .then(function(token){
          var timestamp = new Date().getTime() - (2 * 60 * 60 * 1000);

          if(token.split(':')[0] > timestamp){
            AsyncStorage.setItem(LOCAL_STORE_KEYS.FacebookToken, token)
            .then(function(){
              this.props.navigator.pop();
            })
            .catch((error) => {
              console.log(error);
            });
          }
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
