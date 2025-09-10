import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

export default function MainAppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      {/* Add more drawer items like Settings, Help, etc. */}
    </Drawer.Navigator>
  );
}
