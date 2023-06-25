import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../navigation/HomeStackScreen';
import SettingsStackScreen from '../navigation/SettingsStackScreen';
import MessageStackScreen from '../navigation/MessageStackScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../screens/Login';
import colors from '../components/colors'
import Icon from 'react-native-vector-icons/FontAwesome';



const Stack = createStackNavigator();




const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTabs') {
                        iconName = "clock-o";
                    } else if (route.name === 'MessageTabs') {
                        iconName = "envelope";
                    } else if (route.name === 'SettingsTabs') {
                        iconName = "list";
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={25} color={color} />/*  <Ionicons name={iconName} size={size} color={color} /> */;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { marginBottom: 10 },
                tabBarStyle: { height: 90 },
            })}>
            <Tab.Screen name="HomeTabs" component={HomeStackScreen} options={{ headerShown: false, tabBarLabel: 'ล่าสุด' }} />
            <Tab.Screen name="MessageTabs" component={MessageStackScreen} options={{ headerShown: false, tabBarLabel: 'ข้อความ' }} />
            <Tab.Screen name="SettingsTabs" component={SettingsStackScreen} options={{ headerShown: false, tabBarLabel: 'ตั้งค่า' }} />
        </Tab.Navigator>
    );
}



class Index extends Component {


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Login" component={Login} /> */}
                    <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Index;