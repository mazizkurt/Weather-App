import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import NotCity from './components/not-city';
import Citys from './components/citys';

type Props = {};

const Home = (props: Props) => {
  const {citys} = useSelector((state: any) => state.city);
  if (citys.length == 0) return <NotCity />;
  else return <Citys />;
};

export default Home;
