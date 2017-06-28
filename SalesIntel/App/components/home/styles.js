import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
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
