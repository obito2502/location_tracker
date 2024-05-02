import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import MapScreen from '../screens/MapScreen';
import MapIcon from '../assets/icons/MapIcon';
import TimeIcon from '../assets/icons/TimeIcon';

const MapLabel = () => <MapIcon />;
const TimeLabel = () => <TimeIcon />;

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitle: 'Трекинг позиции',
          tabBarIcon: MapLabel,
          tabBarLabel: 'Карта',
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitle: 'История',
          tabBarLabel: 'История',
          tabBarIcon: TimeLabel,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
