import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Lottie from 'lottie-react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../styles';
import {Modalize} from 'react-native-modalize';
import cities from 'src/services/cities.json'
type Props = {};
const {height} = Dimensions.get('window');
const NotCity = (props: Props) => {
  const modalizeRef = useRef<Modalize>(null);
  console.log(process.env.REACT_APP_BASE_URL)
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const changeCities = (e: any) => {
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
        snapPoint={height / 2}
        HeaderComponent={
          <View style={styles.search}>
            <View style={styles.searchView}>
              <TextInput
                placeholder="İl veya ilçe seçiniz"
                onChangeText={changeCities}
              />
            </View>
          </View>
        }></Modalize>
    </>
  );
};

export default NotCity;
