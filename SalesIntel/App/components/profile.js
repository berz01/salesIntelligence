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

import Nav from './global-widgets/nav'
import IconA from 'react-native-vector-icons/FontAwesome';
import Api from '../actions/handshake.api';

var {height, width} = Dimensions.get('window');

const theme = getTheme();
const styles = require('../styles');

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
      return <Image style={styling.feedImage} source={{uri: image}}/>
    }
  }
  renderText(text){
    if(text != null){
      return <Text style={styling.feedText}>{text}</Text>
    }
  }

  componentDidMount(){
    var _this = this;

    Promise.all([Api.getProfile(),
      Api.getFacebookFeed(),
      Api.getLinkedInFeed(),
      Api.getInstagramFeed(),
      Api.getTwitterFeed()])
      .then(responses => {
        console.log(responses);
        _this.setState({
          isLoading: false,
          socialData: this.state.socialData.cloneWithRows(responses[0].feed),
          profileData: responses[0].profileData,
          profileHeadline: responses[0].profileHeadline,
          fbFeed: this.state.fbFeed.cloneWithRows( responses[1].feed),
          linkedinFeed: this.state.linkedinFeed.cloneWithRows( responses[2].feed),
          instagramFeed: this.state.instagramFeed.cloneWithRows( responses[3].feed),
          twitterFeed: this.state.twitterFeed.cloneWithRows( responses[4].feed),
        });
      })
      .catch(e => {
        console.log("EXCEPTION FOR ALL PROMISES", e);
      });

    // Api.getFacebookFeed()
    // .then(data => {
    //     _this.setState({
    //       fbFeed: this.state.fbFeed.cloneWithRows(data.feed)
    //     })
    // })
    //
    // Api.getLinkedInFeed()
    // .then(data => {
    //     _this.setState({
    //       linkedinFeed: this.state.linkedinFeed.cloneWithRows(data.feed)
    //     })
    // })
    //
    // Api.getInstagramFeed()
    // .then(data => {
    //     _this.setState({
    //       instagramFeed: this.state.instagramFeed.cloneWithRows(data.feed)
    //     })
    // })
    //
    // Api.getTwitterFeed()
    // .then(data => {
    //     _this.setState({
    //       twitterFeed: this.state.twitterFeed.cloneWithRows(data.feed)
    //     })
    // })
  }

  renderProfile(){
      let profileUri = this.state.profileData.pictureUri;
      return (
      <Image style={custom.bgImage} source={require('../images/background.jpg')}>
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
          <View style={styling.feedCard}>
            <View style={styling.feedHeader}>
              <IconA name="facebook" color="#ffffff" size={25}/>
            </View>
            <View style={styling.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.fbFeed}
                renderRow={(rowData) =>
                  <View style={styling.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styling.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={styling.feedCard}>
            <View style={styling.feedHeader}>
              <IconA name="linkedin-square" color="#ffffff" size={25}/>
            </View>
            <View style={styling.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.linkedinFeed}
                renderRow={(rowData) =>
                  <View style={styling.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>

                    <View style={styling.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                </View>
                }
              />
            </View>
          </View>
          <View style={styling.feedCard}>
            <View style={styling.feedHeader}>
              <IconA name="instagram" color="#ffffff" size={25}/>
            </View>
            <View style={styling.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.instagramFeed}
                renderRow={(rowData) =>
                  <View style={styling.feedRow}>
                    <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styling.feedItems}>
                      {this.renderImage(rowData.img)}
                      {this.renderText(rowData.info)}
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={styling.feedCard}>
            <View style={styling.feedHeader}>
              <IconA name="twitter" color="#ffffff" size={25}/>
            </View>
            <View style={styling.feedContent}>
              <ListView
                enableEmptySections={true}
                dataSource={this.state.twitterFeed}
                renderRow={(rowData) =>
                  <View style={styling.feedRow}>
                  <IconA name="angle-double-right" color="#ffffff" size={20}/>
                    <View style={styling.feedItems}>
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
        <View style={styling.spinnerContainer}>
          <MKSpinner style={styling.spinner}/>
        </View>
      );
    } else {
      profileView = this.renderProfile();
    }

    return (
      <View style={styles.container}>
        <Nav
          toHome={() => this.props.navigator.replace({id:'home'})}
          />
        {profileView}
      </View>
    )
  };

}

const styling = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
    height: 50
  },
  feedCard: {
    flex: 1,
    marginVertical: height * 0.015,
    marginHorizontal: width * 0.05,
    padding: 25,
    backgroundColor: '#303030',
    borderRadius: 1,
    borderColor: '#303030',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    }
  },
  feedContent:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-end',
  },
  feedItems:{
      flex:1,
      paddingLeft:5
  },
  feedHeader:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-end',
      borderBottomColor:  'rgba(255, 255, 255, 0.75)',
      borderBottomWidth: 2,
      paddingBottom:10
  },
  feedRow: {
      flex:1,
      flexDirection:'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingVertical:10,
      paddingRight:10,
      borderBottomColor:  'rgba(255, 255, 255, 0.5)',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  feedText: {
      color: '#ffffff',
      minHeight: 20,
      fontSize: 14
  },
  feedImage: {
    height:300,
    width:300,
    borderRadius: 2
  },
});

const custom = StyleSheet.create({
  imageCircle: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  name:{
    color: '#ffffff',
    fontWeight: '300',
    fontFamily: 'sans-serif-thin',
    fontSize: 28
  },
  occupation:{
    color: '#ffffff',
    fontSize: 12
  },
  contentHeader:{
    color: '#ffffff',
    minHeight: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: width * 0.9,
    fontSize: 16
  },
  insights:{
    color: '#ffffff',
    minHeight: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 16,
  },
  heroText:{
    color: '#ffffff',
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: width * 0.9,
    fontSize: 16
  },
  contentText:{
    flex:1,
    color: '#ffffff',
    minHeight: 50,
    paddingLeft:5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14
  },
  scrollViewStyle: {
    flex: 1
  },
  profileInfo:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-end',
      paddingLeft:10
  },
  profileContentStyle:{
      flex:1,
      padding:20
  },
  profileHeaderContentStyle:{
      flex:1,
      flexDirection:'row',
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:20
  },
  profileNetworks:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'space-between',
      maxWidth: width * 0.075,
      marginRight: 5
  },
  profileCardStyle: {
    flex: 1,
    marginTop: height * 0.4,
    marginBottom: height * 0.015,
    marginHorizontal: width * 0.05,
    backgroundColor: '#303030',
    borderRadius: 1,
    borderColor: '#303030',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    }
  },
  headerCardStyle: {
    flex: 1,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.05,
    backgroundColor: '#303030',
    borderRadius: 1,
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
