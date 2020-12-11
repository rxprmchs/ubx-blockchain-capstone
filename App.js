import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import Login from './src/screens/Authentication/Login'
import FarmerSinup from './src/screens/Authentication/components/FarmerSignup/FarmerSignup'
import WholesalerSignup from './src/screens/Authentication/components/WholesalerSignup/WholesalerSignup'
import MainMenu from './src/shared/components/MainMenu/MainMenu'

const Stack = createStackNavigator();

export default function(){
  let [fontsLoaded] = useFonts({
    'Dense-Regular': require('./assets/fonts/Dense-Regular.otf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  const AuthCompents = () => {
    return(
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Farmer Signup" component={FarmerSinup}/>
        <Stack.Screen name="Wholesaler Signup" component={WholesalerSignup}/>
      </Stack.Navigator>
    )
  }

  if(!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Authentication" component={AuthCompents} />
            <Stack.Screen name="Main Menu" component={MainMenu} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}