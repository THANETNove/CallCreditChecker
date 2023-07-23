import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import SettingsScreen from '../screen/Settings';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screen/User';
import Login from '../screen/Login';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const indexScreen = () => {
  const {auth_username, auth_password, language} = useSelector(
    state => state.authUser,
  );

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
          title:
            language == 'ไทย'
              ? 'หน้าเเรก'
              : language == 'England'
              ? 'Home'
              : language == '中国'
              ? '家'
              : '집',
        }} //th ไทย/eng อังกฤษ/语言 จีน /언어 เกาหลี
      />
      <Tab.Screen
        name="userTab"
        component={UserScreen}
        options={{
          headerShown: false,
          title:
            language == 'ไทย'
              ? 'เบอร์ผู้ใช้'
              : language == 'England'
              ? 'User'
              : language == '中国'
              ? '用户'
              : '사용자',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          headerShown: false,
          title:
            language == 'ไทย'
              ? 'ตั้งค่า'
              : language == 'England'
              ? 'Settings'
              : language == '中国'
              ? '设置'
              : '설정',
        }}
      />
    </Tab.Navigator>
  );
};

function MyStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="indexScreen"
        component={indexScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
