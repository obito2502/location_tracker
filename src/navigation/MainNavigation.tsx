import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigation';
import ShowLocationScreen from '../screens/ShowLocationScreen';
import BackIcon from '../assets/icons/BackIcon';

const Stack = createStackNavigator();

const backButton = () => <BackIcon />;

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen
        name="ShowLocation"
        component={ShowLocationScreen}
        options={{
          headerShown: true,
          headerBackImage: backButton,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
