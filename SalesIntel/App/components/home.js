/**
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  View
} from 'react-native';

import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window') || 0;

export default class Home extends Component {
  render() {
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
                        uri: 'https://avatars1.githubusercontent.com/u/9463467?v=3&s=400'
                      }} style={styles.imageCircle}/>
                      <Text style={styles.nameText}>
                        Barrett Davis
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
                        uri: 'https://avatars1.githubusercontent.com/u/14258175?v=3&u=3247df93f2a720166734a19eea9c6eaa2074e080&s=400'
                      }} style={styles.imageCircle}/>
                      <Text style={styles.nameText}>
                        Taylor Ereio
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

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  dateWrapper: {
    flexDirection: 'row'
  },
  dateLabel: {
    paddingLeft: 15,
    paddingVertical: 15,
    minWidth: 65
  },
  dateText: {
    fontSize: 16
  },
  eventList: {
    flex: 1
  },
  metaText: {
    color: '#ffffff',
    fontSize: 14
  },
  titleMain: {
    fontSize: 20,
    color: '#ffffff',
    margin: 2
  },
  titleSub: {
    fontSize: 14,
    color: '#ffffff',
    margin: 2
  },
  nameText: {
    fontSize: 12,
    color: '#ffffff',
    paddingLeft: 20
  },
  imageCircle: {
    height: 35,
    borderRadius: 50,
    width: 35
  },
  eventCard: {
    flex: 1,
    marginRight: 10,
    marginVertical: 5,
    paddingVertical: 15,
    backgroundColor: '#303030',
    borderRadius: 3,
    borderColor: '#303030',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  eventContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  eventMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 18
  },
  eventTitles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 15
  },
  eventAttendeesView: {
    flex: 1,
    paddingHorizontal: 20
  },
  eventAttendeesRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5
  },
  attendeeInfoView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  attendeeInfoIndicatorView: {}
});
