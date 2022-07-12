import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';

type Props = {
  data: any;
  active: any;
};

const Pagination = (props: Props) => {
  var data = props.data;
  var active = props.active;
  if (active)
    return (
      <View style={styles.pagination}>
        {data.map((data: any, index: number) => (
          <View
            key={index}
            style={
              active.viewableItems[0].key === index + 1
                ? styles.activePagi
                : styles.pagi
            }></View>
        ))}
      </View>
    );
};

export default Pagination;
