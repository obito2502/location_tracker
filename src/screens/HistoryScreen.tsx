import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import GeoItem from '../components/GeoItem';
import {data} from '../listData';

const HistoryScreen = () => {
  return (
    <View>
      <FlatList data={data} renderItem={item => <GeoItem item={item.item} />} />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
