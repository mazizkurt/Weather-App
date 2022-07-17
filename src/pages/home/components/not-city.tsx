import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Lottie from 'lottie-react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../styles';
import {Modalize} from 'react-native-modalize';
import {getCurrentWeather, getGeocoding} from 'src/services';
import search from 'src/assets/icons/search';
import {SvgXml} from 'react-native-svg';
import plusCircle from 'src/assets/icons/plus-circle';
import {useDispatch} from 'react-redux';
import {addCity} from 'src/redux/slices/citySlice';
type Props = {};
const {height} = Dimensions.get('window');
const NotCity = (props: Props) => {
  const dispatch = useDispatch();
  const modalizeRef = useRef<Modalize>(null);
  
  const [searchCities, setSearchCities] = useState([]);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const changeCities = (e: any) => {
    if (e.length > 1)
      getGeocoding(e)
        .then(res => {
          setSearchCities(res.data);
        })
        .catch(err => console.log(err));
    else setSearchCities([]);
  };

  const addNewCity = (e: any) => {
    getCurrentWeather(e.lat, e.lon).then((res)=>{
      e.currentWeather = res.data
       dispatch(addCity(e))
    }).catch((err)=>{
      console.log(err)
    })
    modalizeRef.current?.close();
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
        FooterComponent={<Text>Footer</Text>}
        HeaderComponent={
          <View style={styles.search}>
            <View style={styles.searchView}>
              <TextInput
                placeholder="İl veya ilçe seçiniz"
                onChangeText={changeCities}
                style={styles.searchInput}
              />
              <SvgXml xml={search('#CFCFCF')} />
            </View>
          </View>
        }>
        <ScrollView>
          <View style={styles.result}>
            {searchCities.map((data: any, index) => (
              <TouchableOpacity
                style={styles.resultView}
                activeOpacity={0.7}
                onPress={(e: any) => addNewCity(data)}>
                <Text style={styles.resultText}>
                  {data.name}, {data.country}
                </Text>
                <SvgXml xml={plusCircle('#A0A0A0')} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Modalize>
    </>
  );
};

export default NotCity;
