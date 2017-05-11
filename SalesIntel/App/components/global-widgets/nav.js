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
      <View style={styles.baseContainer}>
        <View style={styles.logoContainer}>
            <TouchableOpacity onPress={this.props.toHome}>
              <Image source ={require('../../images/icon.png')} resizeMode="contain" style={styles.iconFormatting}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.toHome}>
              <Image source ={require('../../images/logo_2.png')} resizeMode="contain" style={{
                width: 150,
                height: 35
              }}/>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress ={this.props.toSearch}>
            <Iconz name="md-search" color="#555" size={30}  style={styles.actionFormatting}/>
          </TouchableOpacity>
          <TouchableOpacity onPress ={this.props.toAdd}>
            <Iconz name="md-add" color="#555" size={30}  style={styles.actionFormatting}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  profile() {
    return (
      <View style={styles.baseContainer}>
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
      <View style={styles.baseContainer}>
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
  baseContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin:10
  },
  iconFormatting:{
      width: 35,
      height: 35,
      marginLeft:10,
      marginRight:5
  },
  actionFormatting: {
      margin: 10
  }
});
