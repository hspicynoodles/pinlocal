import React from 'react';
//import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddPinScreen from '../screens/AddPinScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    //const Navigation = createStaticNavigation(RootStack);
    const Stack = createNativeStackNavigator();


    // Bottom Tabs 
    function BottomTabs() {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        tabBarLabelStyle: { color: '#008E97' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="home-outline" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="home-outline" size={30} color="white" />
                            )
                    }} />
                <Tab.Screen
                    name="AddPin"
                    component={AddPinScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        tabBarLabelStyle: { color: '#008E97' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="plus-circle-outline" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="plus-circle-outline" size={30} color="white" />
                            )
                    }} />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        tabBarLabelStyle: { color: '#008E97' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="search-outline" size={30} color="white" />
                            ) : (
                                <Ionicons name="search-outline" size={30} color="white" />
                            )
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarStyle: { backgroundColor: '#101010' },
                        tabBarLabelStyle: { color: '#008E97' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="account-outline" size={30} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="account-outline" size={30} color="white" />
                            )
                    }} />

            </Tab.Navigator>
        );
    }

    // Stack Navigator
    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddPin"
                    component={AddPinScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )

}

export default StackNavigator;

