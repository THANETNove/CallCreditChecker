import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../screens/Message';

const HomeStack = createStackNavigator();




export default function MessageStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}
