import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/Home";
import IssLocationScreen from './Screens/IssLocation';
import MeteorsScreen from './Screens/Meteors';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ISS Location" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
