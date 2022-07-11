import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bottomText: {
    width: '70%',
    textAlign: 'center',
  },
  next: {
    position: 'absolute',
    bottom: 60,
    right: 50,
  },
});
