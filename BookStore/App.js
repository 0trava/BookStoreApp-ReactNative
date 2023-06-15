import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail } from './screens';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={''}
      >
        {/* TABS */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screen */}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
