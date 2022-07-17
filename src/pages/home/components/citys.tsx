import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {SvgXml} from 'react-native-svg';
import plusCircle from 'src/assets/icons/plus-circle';
import settings from 'src/assets/icons/settings';
import {API_URL, API_ICON} from '@env';
import {Modalize} from 'react-native-modalize';
import {getCurrentWeather, getGeocoding} from 'src/services';
import {addCity} from 'src/redux/slices/citySlice';
import search from 'src/assets/icons/search';
import * as Animatable from 'react-native-animatable';

type Props = {};
const {height} = Dimensions.get('window');

const Citys = (props: Props) => {
  const dispatch = useDispatch();
  const {citys} = useSelector((state: any) => state.city);
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
    getCurrentWeather(e.lat, e.lon)
      .then(res => {
        e.currentWeather = res.data;
        dispatch(addCity(e));
        setSearchCities([])
      })
      .catch(err => {
        console.log(err);
        setSearchCities([])
      });
    modalizeRef.current?.close();
  };
  return (
    <SafeAreaView style={styles.citysView}>
      <View style={styles.headerCitysView}>
        <View style={styles.headerCitysContent}>
          <Text style={styles.headerCitysTitle}>Hava Durumu</Text>
          <View style={styles.headerCitysRight}>
            <TouchableOpacity activeOpacity={0.7} onPress={onOpen}>
              <SvgXml xml={plusCircle('#8E8E8E')} style={{marginRight: 20}} />
            </TouchableOpacity>
            <SvgXml xml={settings('#8E8E8E')} />
          </View>
        </View>
      </View>
      <View style={styles.contentCitysView}>
        <ScrollView style={styles.contentScrollCitysView}>
          <View style={styles.citysContentCard}>
            {citys.map((data: any, index: any) => {
              return (
                <Animatable.View style={styles.citysCard} key={index} animation="fadeInUp" delay={200*index} direction="alternate" useNativeDriver={true}>
                  <View style={[styles.widgetHeader, {marginBottom: 10}]}>
                    <View>
                    <Text style={styles.weatherText}>
                      {Math.round(data.currentWeather?.main.temp)} °C
                    </Text>
                    <Text style={styles.humidityText}>
                      Nem {Math.round(data.currentWeather?.main.humidity)} %
                    </Text>
                    </View>
                  
                    <Image
                      source={{
                        uri: `${API_ICON}/img/wn/${data.currentWeather?.weather[0].icon}@2x.png`,
                      }}
                      style={{width: 50, height: 50}}
                    />
                  </View>
                  <View style={styles.widgetHeader}>
                    <View>
                      <Text style={styles.weatherNameText}>{data.name}</Text>
                      <Text style={styles.weatherDescText}>
                        {data.currentWeather?.weather[0].description}
                      </Text>
                    </View>
                  </View>
                </Animatable.View>
              );
            })}
          </View>
        </ScrollView>
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
    </SafeAreaView>
  );
};

export default Citys;
