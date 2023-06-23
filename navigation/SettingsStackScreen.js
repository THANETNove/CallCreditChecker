import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';

const SettingsStack = createStackNavigator();


export default function SettingsStacktackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={Settings} />
        </SettingsStack.Navigator>
    )
}
