import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Story from './user/Story';
import infoText from './user/infoText';



const Stack = createStackNavigator();

export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Story"
          component={Story}
          options={{
            headerTitle: "Story",
          }}
        />
        <Stack.Screen
          name="infoText"
          component={infoText}
          options={{
            headerTitle: "Detail Story",
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
//Nhập câu lệnh :
//npm install @react-navigation/native @react-navigation/stack
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
