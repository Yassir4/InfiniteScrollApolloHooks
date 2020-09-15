import { StyleSheet } from 'react-native'
const backgroundColor = 'rgb(242, 242, 247)'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  goBackSection: {
    marginTop: 10,
    marginLeft: 10,
    width: '100%',
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
  },
  goBackText: {
    color: 'rgb(0, 122, 255)',
    marginLeft: 5,
    fontSize: 17,
    fontWeight: '400',
  },
  forwardIcon: {
    transform: [{ rotate: '180deg' }],
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  },
  errorText: {
    color: 'red',
  },
})
