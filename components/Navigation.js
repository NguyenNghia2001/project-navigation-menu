import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen/index';
import LoginScreen from '../screens/LoginScreen/index';

const Stack = createBottomTabNavigator();
// const Stack = createMaterialBottomTabNavigator();
// const Stack = createMaterialTopTabNavigator();



const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Register') {
              iconName = 'home';
              size = focused ? 25 : 20;
            } else if (route.name === 'Login') {
              iconName = 'user';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome name={iconName}
                size={size}
                color={color} />
            )
          },
        })}
         tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}
        >
        <Stack.Screen name="Register" component={HomeScreen} options={{ tabBarBadge: 5 }} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
