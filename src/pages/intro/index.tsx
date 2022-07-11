import {Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import ArrowRight from 'src/assets/icons/arrow-right';
type Props = {};

const Intro = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Lottie
          source={require('../../lottie/intro/step-1.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Hava durumunu en güncel veriler ile takip edilebilmektedir.
        </Text>
        <View style={styles.next}>
          <SvgXml xml={ArrowRight('black')} />
        </View>
      </View>
    </View>
  );
};

export default Intro;
