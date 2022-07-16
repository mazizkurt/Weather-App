import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {useSelector} from 'react-redux';
import { SvgXml } from 'react-native-svg';
import plusCircle from 'src/assets/icons/plus-circle';
import settings from 'src/assets/icons/settings';

type Props = {};

const Citys = (props: Props) => {
  const {citys} = useSelector((state: any) => state.city);
  return (
    <SafeAreaView style={styles.citysView}>
      <View style={styles.headerCitysView}>
        <View style={styles.headerCitysContent}>
          <Text style={styles.headerCitysTitle}>Hava Durumu</Text>
          <View style={styles.headerCitysRight}>
            <SvgXml xml={plusCircle('#A0A0A0')} style={{marginRight:10}}/>
            <SvgXml xml={settings('#A0A0A0')} />
          </View>
        </View>
      </View>
      <View style={styles.contentCitysView}>
      <ScrollView style={styles.contentScrollCitysView}>
        <View style={styles.citysContentCard}>
        {citys.map((data: any, index: any) => (
         <>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.citysCard} key={index}>
            <Text>{data.name}</Text>
          </View>
          </>
        ))}
        </View>
        
      </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

export default Citys;
