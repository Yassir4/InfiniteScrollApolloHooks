import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  repoName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(0, 0, 0)',
    width: '75%',
  },
  timeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  timeText: {
    color: ' rgba(60, 60, 67, 0.6)',
    fontSize: 13,
    marginRight: 5,
  },
  bodySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  descriptionText: {
    width: '85%',
    color: 'rgba(60, 60, 67, 0.6)',
    fontSize: 14,
  },
  forkCount: {
    fontSize: 11,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  forkWrapper: {
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: 'rgb(242, 242, 247)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  languageText: {
    fontSize: 12,
    color: 'rgb(0, 0, 0)',
  },
  topicsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  topicName: {
    marginHorizontal: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    backgroundColor: ' rgb(221, 247, 231)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(86, 214, 134)',
    fontSize: 11,
  },
  moreTopicText: {
    marginHorizontal: 2,
    color: 'rgba(60, 60, 67, 0.6)',
    fontSize: 11,
  },
  separationLine: {
    borderColor: 'rgb(200, 199, 204)',
    borderBottomWidth: 0.6,
    width: '100%',
    marginTop: 15,
  },
})
