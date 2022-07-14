import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';
import React, {useRef} from 'react';
import {styles} from '../styles';
import {Modalize} from 'react-native-modalize';

type Props = {};
const {height} = Dimensions.get('window')
const NotCity = (props: Props) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <View style={styles.notCityContainer}>
        <Lottie
          source={require('src/lottie/home/not-citys')}
          autoPlay
          loop
          style={styles.notCityLottie}
        />
        <Text style={styles.notAddCityText}>Henüz bir şehir eklemediniz.</Text>
        <TouchableOpacity style={styles.addCity} onPress={onOpen}>
          <Text style={styles.addCityText}>Şehir Ekle</Text>
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        snapPoint={height/2}
        HeaderComponent={
          <View>
            <Text>Header</Text>
          </View>
        }
        >
        <Text>Debeneeeeeee</Text>
      </Modalize>
    </>
  );
};

export default NotCity;
