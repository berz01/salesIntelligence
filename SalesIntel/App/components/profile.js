/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
  setTheme
} from 'react-native-material-kit';

import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');

const theme = getTheme();
const styles = require('../styles');

//setTheme({checkboxStyle: {
//  fillColor: MKColor.Teal,
//  borderOnColor: MKColor.Teal,
//  borderOffColor: MKColor.Teal,
//  rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
//}});

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var action = (<Text> My action</Text>);
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );


    return (
      <View style={styles.container}>
        <Image style={custom.bgImage} source={require('../images/background.jpg')}>
          <ScrollView style={styles.scrollContainer}>
            <View style={custom.headerCardStyle}>
                <Text style={[theme.cardContentStyle, {padding:0}, custom.contentText]}>
                  Outdoors. Rock Climbing. Father. - @rockman
                </Text>
            </View>
          </ScrollView>
        </Image>
      </View>
    )
  }
}

const custom = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  contentText:{
    color: '#ffffff',
    minHeight: 50,
    minWidth: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  headerCardStyle: {
    flex: 1,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.05,
    backgroundColor: '#303030',
    borderRadius: 2,
    borderColor: '#303030',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    }
  }
});
