import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const ShowLocationScreen = () => {
  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: params?.lat,
          longitude: params?.long,
          latitudeDelta: 0,
          longitudeDelta: 0.1,
        }}
        zoomControlEnabled>
        <Marker
          coordinate={{
            latitude: params?.lat,
            longitude: params?.long,
          }}
        />
      </MapView>
    </View>
  );
};

export default ShowLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
