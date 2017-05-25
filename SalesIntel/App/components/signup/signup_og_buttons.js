/**
 * Profile Page for Handshake
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
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

import Nav from '../global-widgets/nav';
import IconA from 'react-native-vector-icons/FontAwesome';

const theme = getTheme();
const styles = require('./styles');

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

const FacebookButton = MKButton.coloredButton()
  .build();
const ColoredFab = MKButton.coloredFab()
  .withStyle(styles.fab)
  .build();

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
          <View style={styles.headerContainer}>
            <Text>Add Social Networks for people to connect</Text>
          </View>
          <View style={styles.buttonContainer}>
            <FacebookButton onPress={this.loadFacebookPermissions}>
              <Text pointerEvents="none"
                   style={{color: 'white', fontWeight: 'bold', alignItems: 'center'}}>
                 <IconA name="facebook" color="#ffffff" size={15}/>
                Login to Facebook
             </Text>
             </FacebookButton>
             <ColoredFab onPress={this.loadFacebookPermissions}>
               <IconA name="facebook" color="#ffffff" size={30}/>
             </ColoredFab>
            <FacebookButton onPress={this.loadFacebookPermissions}/>
            <FacebookButton onPress={this.loadFacebookPermissions}/>
            <FacebookButton onPress={this.loadFacebookPermissions}/>
          </View>
        </View>
      </View>
    )
  };
}
