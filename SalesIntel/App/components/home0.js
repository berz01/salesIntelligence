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
  View
} from 'react-native';

import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window') || 0;

export default class Home extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Nav toProfile={() => this.props.navigator.push({id: 'profile'})} toHome={() => this.props.navigator.replace({id: 'home'})}/>
        <ScrollView style={styles.base} contentContainerStyle={styles.eventList}>
          <View style={styles.eventCard}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
              </Text>
            </View>
            <View style={styles.eventTitles}>
              <Text style={styles.welcome}>
                Candidate Presentation
              </Text>
              <Text style={styles.welcome}>
                Room 310
              </Text>
            </View>
            <View style={styles.eventAttendeesView}></View>
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
              </Text>
            </View>
            <View style={styles.eventTitles}>
              <Text style={styles.welcome}>
                Candidate Presentation
              </Text>
              <Text style={styles.welcome}>
                Room 310
              </Text>
            </View>
            <View style={styles.eventAttendeesView}></View>
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventMeta}>
              <Text style={styles.metaText}>
                2:30pm - 3:15pm
              </Text>
              <Text style={styles.metaText}>
                # work
              </Text>
            </View>
            <View style={styles.eventTitles}>
              <Text style={styles.welcome}>
                Candidate Presentation
              </Text>
              <Text style={styles.welcome}>
                Room 310
              </Text>
            </View>
            <View style={styles.eventAttendeesView}></View>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Calendar Landing Page Here
          </Text>
          <TouchableOpacity onPress={() => this.props.navigator.push({id: 'profile'})}>
            <Iconz name="md-person" color="#888" size={30} style={{
              margin: 10
            }}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  eventList: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  eventCard: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#303030',
    borderRadius: 3,
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
  eventMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  eventTitles: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  eventAttendeesView: {
    flex: 1,
    padding: 20
  },
  metaText: {
    flex: 1,
    color: '#ffffff',
    minHeight: 50,
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14
  }
});
