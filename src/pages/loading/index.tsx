import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

type Props = {};

const Loading = (props: Props) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('src/lottie/loading/loading.json')}
        style={{width:100,height:100}}
        speed={2}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
