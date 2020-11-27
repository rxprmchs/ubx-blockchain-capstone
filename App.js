import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Authentication/Login'
import MainMenu from './src/shared/components/MainMenu/MainMenu'

const Stack = createStackNavigator();

export default function(){

  const AuthCompents = () => {
    return(
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Authentication" component={AuthCompents} />
        <Stack.Screen name="Main Menu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
