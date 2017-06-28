/**
 * Handshake
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, BackHandler, View} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'

import Home from './home/home';
import Profile from './profile/profile';
import Signup from './signup/signup';
import WebViewer from './webviewer/webviewer';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.navigator = null;

    this.handleBack = (() => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
        console.log("NAV:", this.navigator);
        this.navigator.pop();
        return true;
      }
      return false;
    }).bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

  renderScene(route, navigator) {
    var {state, actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (<Home {...this.props} userData={route.userData} navigator={navigator}/>);
    }
    if (routeId === 'profile') {
      return (<Profile {...this.props} userData={route.userData} navigator={navigator}/>);
    }
    if (routeId === 'signup'){
      return (<Signup {...this.props} userData={route.userData} navigator={navigator}/>);
    }
    if (routeId === 'WebViewer'){
      return (<WebViewer {...this.props} userData={route.userData} navigator={navigator} url={route.url} />);
    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Navigator style={{
          flex: 1
        }} ref={navigator => {this.navigator = navigator}} initialRoute={{
          id: 'signup',
          name: 'signup'
        }} renderScene={this.renderScene.bind(this)}/>
      </View>
    )
  }
}
