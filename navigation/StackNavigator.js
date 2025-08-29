import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

const RootStack = createNativeStackNavigator({
    screens: {
        WelcomeScreen: WelcomeScreen,
        Home: HomeScreen,
        SignUp: SignUpScreen,
    },
    screenOptions: {
        headerShown: false,
    }
});


const Navigation = createStaticNavigation(RootStack);

export default function StackNavigator() {
    return <Navigation />;
}