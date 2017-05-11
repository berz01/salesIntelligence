/**
 * @flow
 */

import React, { Component } from 'react';
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

var {height, width} = Dimensions.get('window') || 0;

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Nav
        toProfile={() => this.props.navigator.push({id:'profile'})}
        toHome={() => this.props.navigator.replace({id:'home'})}
        />
      <ScrollView style={styles.base}>
        <View style={[styles.eventCard, styles.eventContent]}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
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
            <View style={styles.eventAttendeesView}>
              <TouchableOpacity onPress={() => this.props.navigator.push({id:'profile'})}>
                <View style={styles.eventAttendeesRow}>
                  <View style={styles.attendeeInfoView}>
                    <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/9463467?v=3&s=400'}}
                      style={styles.imageCircle} />
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
              <TouchableOpacity onPress={() => this.props.navigator.push({id:'profile'})}>
                <View style={styles.eventAttendeesRow}>
                  <View style={styles.attendeeInfoView}>
                    <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/14258175?v=3&u=3247df93f2a720166734a19eea9c6eaa2074e080&s=400'}}
                      style={styles.imageCircle} />
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
              <TouchableOpacity onPress={() => this.props.navigator.push({id:'profile'})}>
                <View style={styles.eventAttendeesRow}>
                  <View style={styles.attendeeInfoView}>
                    <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/28536641?v=3&s=400'}}
                      style={styles.imageCircle} />
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
        <View style={[styles.eventCard, styles.eventContent]}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
              </Text>
            </View>
            <View style={styles.eventTitles}>
              <Text style={styles.titleMain}>
                Meet
              </Text>
              <Text style={styles.titleSub}>
                Room 310
              </Text>
            </View>
            <View style={styles.eventAttendeesView}>
            </View>
        </View>
        <View style={[styles.eventCard, styles.eventContent]}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
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
            <View style={styles.eventAttendeesView}>
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
    backgroundColor: '#F5FCFF',
  },
  eventList: {
    flex: 1,
  },
  metaText:{
    flex:1,
    color: '#ffffff',
    fontSize: 14
  },
  titleMain: {
    fontSize: 20,
    color: '#ffffff',
    margin: 2,
  },
  titleSub: {
    fontSize: 14,
    color: '#ffffff',
    margin: 2,
  },
  nameText: {
    fontSize: 12,
    color: '#ffffff',
    paddingLeft:20
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
    marginLeft: width * 0.15,
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
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-start',
  },
  eventMeta:{
      flex:1,
      flexDirection:'row',
      justifyContent: 'flex-start',
      paddingVertical:15,
      paddingLeft:18
  },
  eventTitles:{
      flex:1,
      flexDirection:'column',
      justifyContent: 'flex-start',
      paddingLeft:15
  },
  eventAttendeesView:{
      flex:1,
      padding:20
  },
  eventAttendeesRow:{
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical:5
  },
  attendeeInfoView:{
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
  },
  attendeeInfoIndicatorView:{

  }
});
