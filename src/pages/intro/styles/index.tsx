import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    width: '70%',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
  },
  next: {
    position: 'absolute',
    bottom: 60,
    right: 50,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activePagi: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(142,85,164)',
    margin:5
  },
  pagi:{
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    margin:5
  }
});
