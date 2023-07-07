import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import SettingsScreen from '../screen/Settings';
import UserScreen from '../screen/User';

const Tab = createBottomTabNavigator();

const indexScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="userTab" component={UserScreen} />
      <Tab.Screen name="SettingsTab" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default indexScreen;
