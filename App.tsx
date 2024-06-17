/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import MainNavigation from './src/navigation/MainNavigation';
import {  Alert, PermissionsAndroid } from 'react-native';

function App(): React.JSX.Element {

  var filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    bodyRegex: 'Получены новые координаты:(.*)',
  };

  const getPermission = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS, {
      title: 'SMS GRAND',
      message: 'GIVE IT',
      buttonPositive: 'OK', 
      buttonNegative: 'CANCEL',
      buttonNeutral: "LATER"
    })

    if(granted === PermissionsAndroid.RESULTS.GRANTED) {
      SmsAndroid.list(
        JSON.stringify(filter),
        (fail: string) => {
          console.log('Failed with this error: ' + fail);
        },
        (count: number, smsList: string) => {
          console.log('Count: ', count);
          console.log('List: ', smsList);
          var arr = JSON.parse(smsList);
      
          arr.forEach(function(object: any) {
            console.log('Object: ' + object);
            console.log('-->' + object.date);
            console.log('-->' + object.body.split(' '));
          });
        },
      );
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getPermission()
    }, 1000)

    return () => clearInterval(interval)
  },[])

  useEffect(() => {
    Alert.alert('Получено', "Получены новые координаты", [
      {
        text: 'Закрыть',
        onPress: () => {}
      }
    ])
  }, [])

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
