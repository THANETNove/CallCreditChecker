import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import SettingsScreen from '../screen/Settings';
import UserScreen from '../screen/User';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const indexScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#D43A3A', // สีเมื่อแท็บได้รับการโฟกัส
        inactiveTintColor: '#989898', // สีเมื่อแท็บไม่ได้รับการโฟกัส
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          let iconColor;

          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'userTab') {
            iconName = 'user';
          } else if (route.name === 'SettingsTab') {
            iconName = 'cogs';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="userTab"
        component={UserScreen}
        options={{headerShown: false, title: 'User'}}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{headerShown: false, title: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export default indexScreen;
