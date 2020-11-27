import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../../../screens/Home/Home'
import Settings from '../../../screens/Settings/Settings'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainMenu = props => {

  const HomeComponents = () => {
    return(
    <>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}/>
      </Stack.Navigator>
    </>
    )
  }

  const SettingsComponents = () => {
    return(
    <>
      <Stack.Navigator initialRouteName="Settings" headerMode="none">
        <Stack.Screen name="Settings" component={Settings} options={{ title: "Settings" }}/>
      </Stack.Navigator>
    </>
    )
  }

  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      backBehavior="none"
      inactiveColor="#CFFCFF"
      activeColor="#AAEFDF"
    >
      <Tab.Screen 
        name="Home" 
        children={HomeComponents} 
      />
      <Tab.Screen 
        name="Settings" 
        children={SettingsComponents} 
      />
    </Tab.Navigator>
  );
}

export default MainMenu