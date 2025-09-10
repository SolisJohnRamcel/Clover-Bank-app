import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/Login';
import MainAppNavigator from './MainAppNavigator';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="MainApp" component={MainAppNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
