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
  getTheme,
  setTheme
} from 'react-native-material-kit';

import Nav from './global-widgets/nav'
import IconA from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

const theme = getTheme();
const styles = require('../styles');
var feed = [
  {
    network: 'facebook',
    info: "Kids are Samantha (age 9) & Robert (age 11)",
    img: null
  }, {
    network: 'facebook',
    info: "Married to Jane Smith on January 21, 2009",
    img: null
  }, {
    network: 'linkedin',
    info: "Started at Some Firm in June 06, 2016",
    img: null
  }, {
    network: 'instagram',
    info: "",
    img: null
  }, {
    network: 'twitter',
    info: "i lost my dad in walmart",
    img: null
  }
];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      socialData: ds.cloneWithRows(feed)
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

  render() {

    return (
      <View style={styles.container}>
        <Image style={custom.bgImage} source={require('../images/background.jpg')}>
          <ScrollView style={custom.scrollViewStyle}>
            <View style={custom.headerCardStyle}>
                <Text style={[theme.cardContentStyle, custom.heroText]}>
                  Outdoors. Rock Climbing. Father. - @rockman
                </Text>
            </View>
            <View style={custom.profileCardStyle}>
                <View style={custom.profileHeaderContentStyle}>
                  <Image style={custom.imageCircle} source={require('../images/profile.jpg')}/>
                  <View style={custom.profileInfo}>
                    <Text style={custom.name}>
                      John Smith
                    </Text>
                    <Text style={custom.occupation}>
                      Senior Accountant at Some Firm
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
          </ScrollView>
        </Image>
      </View>
    )
  }
}

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
    fontSize: 16
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
  profileInfo:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-end',
      paddingLeft:10
  },
  profileCardStyle: {
    flex: 1,
    marginTop: height * 0.4,
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
