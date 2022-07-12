import {
  Dimensions,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import ArrowRight from 'src/assets/icons/arrow-right';
import Pagination from './components/pagination';
import {setIntro} from 'src/redux/slices/introSlice';
import {useDispatch} from 'react-redux';
type Props = {};

const {width} = Dimensions.get('window');

const Intro = (props: Props) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [active, setActive] = useState(null);

  const DATA = [
    {
      id: 1,
      image: require('../../lottie/intro/step-1.json'),
      title: t('intro.text'),
    },
    {
      id: 2,
      image: require('../../lottie/intro/step-2.json'),
      title: t('intro.text'),
    },
    {
      id: 3,
      image: require('../../lottie/intro/step-3.json'),
      title: t('intro.text'),
    },
  ];

  const renderItem = (data: any) => {
    return (
      <View style={{width, marginBottom: 40}} key={data.item.id}>
        <Lottie source={data.item.image} autoPlay loop />
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>{data.item.title}</Text>
        </View>
      </View>
    );
  };
  const onViewRef = React.useRef((viewableItems: any) => {
    setActive(viewableItems);
    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const next = () => {
    dispatch(setIntro({intro: true}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FlatList
          data={DATA}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
        <Pagination data={DATA} active={active} />
        {/**/}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.next} onPress={next}>
          <SvgXml xml={ArrowRight('rgb(142,85,164)')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
