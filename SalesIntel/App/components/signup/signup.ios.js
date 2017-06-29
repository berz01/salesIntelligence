/**
 * Profile Page for Handshake
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  ListView,
  AsyncStorage
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
import CircleButton from 'react-native-circle-button';

const theme = getTheme();
const LOCAL_STORE_KEYS = require('../../containers/storagekeys');

const styles = require('./styles');
const MKCustomColors = require('./colors');
const FBSDK = require('react-native-fbsdk');
import ActionButton from 'react-native-action-button';

const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;

const FacebookButton = MKButton.coloredButton()
  .build();

const FacebookFab = MKButton.coloredFab()
  .withBackgroundColor(MKCustomColors.Facebook)
  .withStyle(styles.fab)
  .build();

const InstagramFab = MKButton.coloredFab()
  .withBackgroundColor(MKCustomColors.Instagram)
  .withStyle(styles.fab)
  .build();

const LinkedInFab = MKButton.coloredFab()
  .withBackgroundColor(MKCustomColors.LinkedIn)
  .withStyle(styles.fab)
  .build();

const PinterestFab = MKButton.coloredFab()
  .withBackgroundColor(MKCustomColors.Pinterest)
  .withStyle(styles.fab)
  .build();

const TwitterFab = MKButton.coloredFab()
  .withBackgroundColor(MKCustomColors.Twitter)
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
            console.log(result);
            AccessToken.getCurrentAccessToken()
            .then((data) => {
              console.log("ACCESS TOKEN", data.accessToken);

              AsyncStorage.setItem(LOCAL_STORE_KEYS.FacebookToken, data.accessToken)
              .catch((error) => {
                console.log(error);
              });
            });
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
          <View style={{ flex: 1 }}>
            <FacebookFab onPress={() => this.props.navigator.push({id: 'WebViewer',
              url: 'https://salesintel.herokuapp.com/api/v1/facebook/auth'})}>
              <IconA name="facebook" color="#ffffff" size={30}/>
            </FacebookFab>
            <InstagramFab onPress={this.loadFacebookPermissions}>
              <IconA name="instagram" color="#ffffff" size={30}/>
            </InstagramFab>
            <TwitterFab onPress={this.loadFacebookPermissions}>
              <IconA name="twitter" color="#ffffff" size={30}/>
            </TwitterFab>
            <PinterestFab onPress={this.loadFacebookPermissions}>
              <IconA name="pinterest" color="#ffffff" size={30}/>
            </PinterestFab>
            <LinkedInFab onPress={this.loadFacebookPermissions}>
              <IconA name="linkedin" color="#ffffff" size={30}/>
            </LinkedInFab>
          </View>
      </View>
    )
  };

}
