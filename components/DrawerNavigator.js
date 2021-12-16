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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen/index';
import LoginScreen from '../screens/LoginScreen/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="register"
        drawerPosition='left'
        drawerType="silde"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
      >
        <Drawer.Screen
         name='Register' 
         component={HomeScreen}
         options={{
            title: 'Register To App',
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="home"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
         />
        <Drawer.Screen 
        name='Login' 
        component={LoginScreen}
        options={{
            title: 'Login To App',
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
