

import React, {Component} from 'react';

import {
  StyleSheet,
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

import Nav from '../global-widgets/nav'
import IconA from 'react-native-vector-icons/FontAwesome';
import Api from '../../actions/handshake.api';
import LOCAL_STORE_KEYS from '../../containers/storagekeys'


import styles from './styles';
import custom from './customStyles';
const theme = getTheme();

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const fbListDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const linkedinListFeed = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const instagramListFeed = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const twitterListFeed = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      isLoading: true,
      socialData: ds.cloneWithRows([]),
      fbFeed: fbListDs.cloneWithRows([]),
      linkedinFeed: linkedinListFeed.cloneWithRows([]),
      instagramFeed: instagramListFeed.cloneWithRows([]),
      twitterFeed: twitterListFeed.cloneWithRows([]),
      profileData: {},
      profileHeadline: {},
    };
  }

  renderSocialNetworkIcon(name){
    if(name == 'facebook'){
      return <IconA name="facebook-official" color="#ffffff" size={25}/>
    } else if(name == 'linkedin'){
      return <IconA name="linkedin-square" color="#ffffff" size={25} />
    } else if(name == 'instagram'){
      return <IconA name="instagram" color="#ffffff" size={25} />
    } else if(name == 'twitter'){
      return <IconA name="twitter" color="#ffffff" size={25} />
    }
  }

  renderImage(image){
    if(image != null){
      return <Image style={styles.feedImage} source={{uri: image}}/>
    }
  }
  renderText(text){
    if(text != null){
      return <Text style={styles.feedText}>{text}</Text>
    }
  }

  componentDidMount(){
    var _this = this;

    AsyncStorage.getItem(LOCAL_STORE_KEYS.FacebookToken)
    .then((fbToken) => {
      console.log('FBTOKEN:', fbToken);

      Promise.all([Api.getProfile(),
        Api.getFacebookFeed(fbToken),
        Api.getLinkedInFeed(),
        Api.getInstagramFeed(),
        Api.getTwitterFeed()])
        .then(responses => {
          console.log(responses);

          var newState = {
            isLoading: false,
            socialData: this.state.socialData.cloneWithRows(responses[0].feed),
            profileData: responses[0].profileData,
            profileHeadline: responses[0].profileHeadline,
            fbFeed: this.state.fbFeed.cloneWithRows( responses[1].feed),
            linkedinFeed: this.state.linkedinFeed.cloneWithRows( responses[2].feed),
            instagramFeed: this.state.instagramFeed.cloneWithRows( responses[3].feed),
          };

          if(responses[4] != undefined){
            newState += {  'twitterFeed': this.state.twitterFeed.cloneWithRows( responses[4].feed) }
          }
          _this.setState(newState);
        })
        .catch(e => {
          console.log("EXCEPTION FOR ALL PROMISES", e);
        });
    });
  }

  renderProfile(){
      let profileUri = this.state.profileData.pictureUri;
      return (
      <Image style={custom.bgImage} source={require('../../images/background.jpg')}>
        <ScrollView style={custom.scrollViewStyle}>
          <View style={custom.headerCardStyle}>
              <Text style={[theme.cardContentStyle, custom.heroText]}>
                {this.state.profileHeadline.info}
              </Text>
          </View>
          <View style={custom.profileCardStyle}>
              <View style={custom.profileHeaderContentStyle}>
                <Image style={custom.imageCircle} source={{uri: profileUri}}/>
                <View style={custom.profileInfo}>
                  <Text style={custom.name}>
                    {this.state.profileData.name}
                  </Text>
                  <Text style={custom.occupation}>
                    {this.state.profileData.occupation}
                  </Text>
                </View>
                <View style={custom.profileNetworks}>
                  <IconA name="facebook-official" color="#ffffff" size={25}/>
                  <IconA name="linkedin-square" color="#ffffff" size={25} />
                  <IconA name="instagram" color="#ffffff" size={25} style={{
                      marginBottom: 10
                    }}/>
                </View>
              </View>
              <View style={custom.profileContentStyle}>
                <Text style={custom.insights}>
                  Insights
                </Text>
                <ListView
                  enableEmptySections={true}
                  dataSource={this.state.socialData}
                  renderRow={(rowData) =>
                    <View style={{flex:1,flexDirection:'row'}}>
                    {this.renderSocialNetworkIcon(rowData.network)}
                    <Text style={custom.contentText}> {rowData.info} </Text>
                    </View>
                  }
                />
              </View>
          </View>
          <View style={styles.feedCard}>
            <View style={styles.feedHeader}>
              <IconA name="facebook" color="#ffffff" size={25}/>
            </View>
            <View style={styles.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.fbFeed}
                renderRow={(rowData) =>
                  <View style={styles.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styles.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={styles.feedCard}>
            <View style={styles.feedHeader}>
              <IconA name="linkedin-square" color="#ffffff" size={25}/>
            </View>
            <View style={styles.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.linkedinFeed}
                renderRow={(rowData) =>
                  <View style={styles.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>

                    <View style={styles.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                </View>
                }
              />
            </View>
          </View>
          <View style={styles.feedCard}>
            <View style={styles.feedHeader}>
              <IconA name="instagram" color="#ffffff" size={25}/>
            </View>
            <View style={styles.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.instagramFeed}
                renderRow={(rowData) =>
                  <View style={styles.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styles.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={styles.feedCard}>
            <View style={styles.feedHeader}>
              <IconA name="twitter" color="#ffffff" size={25}/>
            </View>
            <View style={styles.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.twitterFeed}
                renderRow={(rowData) =>
                  <View style={styles.feedRow}>
                  <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styles.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                  </View>
                }
              />
            </View>
          </View>
        </ScrollView>
      </Image>
      )
  }

  render() {
    let profileView;

    if (this.state.isLoading) {
      profileView = (
        <View style={styles.spinnerContainer}>
          <MKSpinner style={styles.spinner}/>
        </View>
      );
    } else {
      profileView = this.renderProfile();
    }

    return (
      <View style={[styles.container, platStyle.container]}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        {profileView}
      </View>
    )
  };
}

const platStyle = StyleSheet.create({
  container:{
    marginTop: 0,
  }
});
