import {
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
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
    ...Platform.select({
      ios: {
        fontFamily: 'GillSans-Light',
      },
      android: {
        fontFamily: 'sans-serif-thin',
      },
    }),
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
    minHeight: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 16,
    borderBottomColor:  'rgba(255, 255, 255, 0.75)',
    borderBottomWidth: 2,
    paddingBottom:10
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
