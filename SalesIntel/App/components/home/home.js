/**
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  View
} from 'react-native';

import Nav from '../global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/FontAwesome';
import Api from '../../actions/handshake.api';
import LOCAL_STORE_KEYS from '../../containers/storagekeys';
import styles from './styles';


var {height, width} = Dimensions.get('window') || 0;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: {
        name: "Loading..."
      }
    };
  }

  componentDidMount(){
    AsyncStorage.getItem(LOCAL_STORE_KEYS.FacebookToken)
    .then((fbToken) => {
      console.log('FBTOKEN:', fbToken);
        Api.getFacebookProfile(fbToken)
        .then((response) => {
          this.setState({
            user: {
              name: response.name,
              pictureUri: response.picture.data.url
            }
          });
        })
    }).catch((e) => {
        console.log(e);
    });
  }

  render() {
    var user = this.state.user;
    return (
      <View style={styles.container}>
        <Nav toProfile={() => this.props.navigator.push({id: 'profile'})}
             toHome={() => this.props.navigator.replace({id: 'home'})}
             toSignup={() => this.props.navigator.replace({id: 'signup'})}/>
        <ScrollView style={styles.base}>
          <View style={styles.dateWrapper}>
            <View style={styles.dateLabel}>
              <Text style={styles.dateText}>
                MAY
              </Text>
              <Text style={[
                styles.dateText, {
                  fontWeight: 'bold'
                }
              ]}>
                11th
              </Text>
            </View>
            <View style={[styles.eventCard, styles.eventContent]}>
              <View style={styles.eventMeta}>
                <Text style={styles.metaText}>
                  10:00am - 12:00pm
                </Text>
                <Text style={styles.metaText}>
                  <IconA name="dot-circle-o" color="#ffffff" size={10} color={'#00bfff'}/> work
                </Text>
              </View>
              <View style={styles.eventTitles}>
                <Text style={styles.titleMain}>
                  Meet and Greet with Summer Interns
                </Text>
                <Text style={styles.titleSub}>
                  Room 15076
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <View style={styles.dateLabel}>
              <Text style={styles.dateText}></Text>
              <Text style={[
                styles.dateText, {
                  fontWeight: 'bold'
                }
              ]}></Text>
            </View>
            <View style={[styles.eventCard, styles.eventContent]}>
              <View style={styles.eventMeta}>
                <Text style={styles.metaText}>
                  1:00pm - 2:30pm
                </Text>
                <Text style={styles.metaText}>
                  <IconA name="dot-circle-o" color="#ffffff" size={10} color={'#00bfff'}/> work
                </Text>
              </View>
              <View style={styles.eventTitles}>
                <Text style={styles.titleMain}>
                  FlashBuild Presentation
                </Text>
                <Text style={styles.titleSub}>
                  Room 310
                </Text>
              </View>
              <View style={styles.eventAttendeesView}>
                <TouchableOpacity onPress={() => this.props.navigator.push({id: 'profile'})}>
                  <View style={styles.eventAttendeesRow}>
                    <View style={styles.attendeeInfoView}>
                      <Image source={{
                        uri: user.pictureUri
                      }} style={styles.imageCircle}/>
                      <Text style={styles.nameText}>
                        {user.name}
                      </Text>
                    </View>
                    <View style={styles.attendeeInfoIndicatorView}>
                      <Iconz name="md-checkmark" color="#33cc33" size={20} style={{
                        margin: 10
                      }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({id: 'profile'})}>
                  <View style={styles.eventAttendeesRow}>
                    <View style={styles.attendeeInfoView}>
                      <Image source={{
                        uri: 'https://avatars1.githubusercontent.com/u/9463467?v=3&s=400'
                      }} style={styles.imageCircle}/>
                      <Text style={styles.nameText}>
                        Barrett Davis
                      </Text>
                    </View>
                    <View style={styles.attendeeInfoIndicatorView}>
                      <Iconz name="md-person" color="#888" size={20} style={{
                        margin: 10
                      }}/>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({id: 'profile'})}>
                  <View style={styles.eventAttendeesRow}>
                    <View style={styles.attendeeInfoView}>
                      <Image source={{
                        uri: 'https://avatars2.githubusercontent.com/u/28536641?v=3&s=400'
                      }} style={styles.imageCircle}/>
                      <Text style={styles.nameText}>
                        Vidya *lastname
                      </Text>
                    </View>
                    <View style={styles.attendeeInfoIndicatorView}>
                      <Iconz name="md-person" color="#888" size={20} style={{
                        margin: 10
                      }}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <View style={styles.dateLabel}>
              <Text style={styles.dateText}>
                MAY
              </Text>
              <Text style={[
                styles.dateText, {
                  fontWeight: 'bold'
                }
              ]}>
                20th
              </Text>
            </View>
            <View style={[styles.eventCard, styles.eventContent]}>
              <View style={styles.eventMeta}>
                <Text style={styles.metaText}>
                  8:00pm - 9:00pm
                </Text>
                <Text style={styles.metaText}>
                  <IconA name="dot-circle-o" color="#ffffff" size={10} color={'#8fbc8f'}/> personal
                </Text>
              </View>
              <View style={styles.eventTitles}>
                <Text style={styles.titleMain}>
                  Goodbye Feast with Chris McGovern
                </Text>
                <Text style={styles.titleSub}>
                  Red Lobster
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <View style={styles.dateLabel}>
              <Text style={styles.dateText}>
                JUNE
              </Text>
              <Text style={[
                styles.dateText, {
                  fontWeight: 'bold'
                }
              ]}>
                14th
              </Text>
            </View>
            <View style={[styles.eventCard, styles.eventContent]}>
              <View style={styles.eventMeta}>
                <Text style={styles.metaText}>
                  2:30pm - 3:15pm
                </Text>
                <Text style={styles.metaText}>
                  <IconA name="dot-circle-o" color="#ffffff" size={10} color={'#00bfff'}/> work
                </Text>
              </View>
              <View style={styles.eventTitles}>
                <Text style={styles.titleMain}>
                  Candidate Presentation
                </Text>
                <Text style={styles.titleSub}>
                  Room 310
                </Text>
              </View>
              <View style={styles.eventAttendeesView}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
