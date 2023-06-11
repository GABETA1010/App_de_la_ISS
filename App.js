import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRootName = "Home" 
    screenOptions = {{
     headerShown : true
    }}>
      
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "ISS location" component = {IssLocationScreen}/>
      <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
      <Stack.Screen name = "Upadates" component = {UpdateScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

