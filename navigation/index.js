import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../navigation/HomeStackScreen';
import SettingsStackNavigator from '../navigation/SettingsStackScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../screens/Login';

const Stack = createStackNavigator();




const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTabs" component={HomeStackScreen} options={{ headerShown: false }} />
            <Tab.Screen name="SettingsTabs" component={SettingsStackNavigator} options={{ headerShown: false }} />
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