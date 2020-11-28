import React, { useState } from 'react'
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../../screens/Home/Home'
import Settings from '../../../screens/Settings/Settings'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainMenu = props => {
  const [visible, setVisible] = useState(true);

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
  
  const Logout = () => {
    return(
      <View>
        <Portal>
          <Dialog visible={() => setVisible(true)} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Do you want to sign out?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    )
  }

  const hideDialog = () => {
    setVisible(false);
    props.navigation.navigate('Authentication')
  }

return (
  <Tab.Navigator 
  initialRouteName="Home" 
  backBehavior="none"
  inactiveColor="#7D80DA"
  activeColor="#fff"
  shifting
  barStyle={{backgroundColor: '#6200ee'}}
  >
      <Tab.Screen 
        name="Home" 
        children={HomeComponents} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        children={SettingsComponents} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="buffer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Logout" 
        children={Logout} 
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainMenu