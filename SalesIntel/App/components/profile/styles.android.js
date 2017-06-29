import {
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
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
  feedColumn: {
      flex:1,
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingVertical:10,
      paddingLeft:5,
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
