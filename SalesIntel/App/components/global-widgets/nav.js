/**
 * Handshake 
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Nav extends Component {
  home() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress ={this.props.toProfile}>
          <Iconz name="md-person" color="#888" size={25} style={{
            margin: 10
          }}/>
        </TouchableOpacity>
        <Image source ={require('../../images/logo.png')} resizeMode="contain" style={{
          width: 150,
          height: 35
        }}/>
        <TouchableOpacity onPress ={this.props.chat}>
          <Iconz name="md-search" color="#555" size={25} style={{
            margin: 10
          }}/>
        </TouchableOpacity>
      </View>
    );
  }
  profile() {
    return (
      <View style={styles.container}>
        <View style={{
          width: 25,
          height: 25,
          margin: 10
        }}/>
        <Image source ={require('../../images/logo.png')} resizeMode="contain" style={{
          width: 100,
          height: 30
        }}/>
        <TouchableOpacity onPress ={this.props.onPress}>
          <Image source={require('../../images/icon.png')} style={{
            width: 25,
            height: 25,
            margin: 10
          }}/>
        </TouchableOpacity>
      </View>
    );
  }

  calendar() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress ={this.props.onPress}>
          <Image source={require('../../images/icon.png')} style={{
            width: 25,
            height: 25,
            margin: 10
          }}/>
        </TouchableOpacity>
        <Image source ={require('../../images/logo.png')} resizeMode="contain" style={{
          width: 100,
          height: 30
        }}/>
        <View style={{
          width: 25,
          height: 25,
          margin: 10
        }}/>
      </View>
    );
  }
  render() {
    if (this.props.type == "calendar") {
      return (
        <View>{this.calendar()}</View>
      );
    } else if (this.props.type == "profile") {
      return (
        <View>{this.profile()}</View>
      );
    } else {
      return (
        <View>{this.home()}</View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  }
});
