import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ManageProducts from '../../screens/ManageProducts/ManageProducts'
import ItemDetails  from '../../screens/ManageProducts/pages/ItemDetails/ItemDetails'
import CameraQR from '../../screens/ManageProducts/pages/CameraQR/CameraQR'
import AdjustTemp from '../../screens/ManageProducts/pages/ItemDetails/AdjustTemp'
import SampleScreen1 from '../../screens/SampleComponent1/SampleComponent1'
import SampleScreen2 from '../../screens/SampleComponent2/SampleComponent2'
import SelectDestination from '../../screens/ManageProducts/pages/SelectDestination/SelectDestination'
import ItemSummary from '../../screens/ManageProducts/pages/ItemSummary/ItemSummary'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainMenu = props => {

  const ManageComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Manage" headerMode="none">
        <Stack.Screen name="Manage Products" component={ManageProducts}/>
        <Stack.Screen name="Select Destination" component={SelectDestination}/>
        <Stack.Screen name="Camera QR" component={CameraQR}/>
        <Stack.Screen name="Item Summary" component={ItemSummary}/>
        <Stack.Screen name="Item Details" component={ItemDetails} />
        <Stack.Screen name="Adjust Temp" component={AdjustTemp} />
      </Stack.Navigator>
    </>
    )
  }
  

return (
  <Tab.Navigator 
    initialRouteName="Home" 
    backBehavior="none"
    inactiveColor="#BCBCBC"
    activeColor="#DE933D"
    shifting
    barStyle={{backgroundColor: '#434343'}}
  >
    <Tab.Screen 
      name="Sample Screen 1" 
      component={SampleScreen1} 
      options={{
      tabBarLabel: 'Sample Screen',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="checkbox-blank-circle-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Home" 
      children={ManageComponents} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
    />
    <Tab.Screen 
    name="Sample Screen 2" 
    component={SampleScreen2}
    options={{
      tabBarLabel: 'Sample Screen',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="checkbox-blank-circle-outline" color={color} size={26} />
        ),
      }}
  />
  </Tab.Navigator>
)}

export default MainMenu