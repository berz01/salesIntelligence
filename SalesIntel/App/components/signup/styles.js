import {StyleSheet, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: width * 0.01,
    paddingTop: height * 0.10,
    justifyContent: 'space-around',
  },
  headerContainer:{
    paddingHorizontal: width * 0.10,
    paddingTop: height * 0.10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleMain: {
    fontSize: 25,
    margin: 2,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  fab:{
    width: 75,
    height: 75,
    borderRadius: 100,
  }

})
