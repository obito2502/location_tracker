import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import GeolocationIcon from '../assets/icons/GeolocationIcon';
import {useNavigation} from '@react-navigation/native';

type GeoItemProps = {
  item: {
    id: number;
    latitude: number;
    longitude: number;
    date: string;
    time: string;
  };
};

const GeoItem: FC<GeoItemProps> = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ShowLocation', {
          lat: item.latitude,
          long: item.longitude,
        })
      }>
      <View style={styles.container}>
        <GeolocationIcon />
        <View style={styles.body}>
          <Text style={styles.coordText}>
            Координаты: {item.latitude}, {item.longitude}
          </Text>
          <Text style={styles.dateTime}>
            Дата и время: {new Date(item.date).toLocaleDateString('ru')},{' '}
            {item.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GeoItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  body: {
    marginLeft: 10,
  },
  coordText: {
    color: 'black',
  },
  dateTime: {
    color: 'grey',
  },
});
