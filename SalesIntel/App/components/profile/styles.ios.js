var {
  StyleSheet,
  Platform
} = require('react-native');
var {
  MKColor
} = require('react-native-material-kit');

module.exports = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginTop: 0,
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
    marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
  },
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    margin: 15,
    marginBottom: 0,
    marginTop: 5,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333'
  },
  commons: {
    padding: 15
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  description: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginTop: 10,
    marginBottom: 10
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420
  }
});
