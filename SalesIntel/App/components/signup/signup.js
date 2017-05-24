/**
 * Profile Page for Handshake
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
  ScrollView,
  ListView
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  MKSpinner,
  getTheme,
  setTheme
} from 'react-native-material-kit';

import Nav from '../global-widgets/nav'
import IconA from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

const theme = getTheme();
const styles = require('./styles');
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  loadFacebookPermissions(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.base}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        <View style={styles.container}>
        </View>
      </View>
    )
  };

}
