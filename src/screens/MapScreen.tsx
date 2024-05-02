import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {data} from '../listData';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        initialRegion={{
          latitude: data[data.length - 1].latitude,
          longitude: data[data.length - 1].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => (
          <Marker
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            key={index}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
