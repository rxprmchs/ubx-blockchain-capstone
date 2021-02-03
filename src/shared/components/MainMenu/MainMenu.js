import React, { useState } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../../screens/Home/Home'
import TransactionDetails from '../../../screens/Home/components/TransactionHistory/components/TransactionDetails'
import Settings from '../../../screens/Settings/Settings'

import ManageProducts from '../../../screens/ManageProducts/ManageProducts'
import ProductInfo from '../../../screens/ManageProducts/pages/ProductInfo/ProductInfo'
import AddProduct from '../../../screens/ManageProducts/pages/AddProduct/AddProduct'
import EditProduct from '../../../screens/ManageProducts/pages/EditProduct/EditProduct'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainMenu = props => {
  const [visible, setVisible] = useState(true);

  const HomeComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}/>
        <Stack.Screen name="Transaction Details" component={TransactionDetails} options={{ title: "Transaction Details" }}/>
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
  const ManageComponents = () => {
    return(
      <>
      <Stack.Navigator initialRouteName="Manage" headerMode="none">
        <Stack.Screen name="Manage Products" component={ManageProducts} options={{ title: "Settings" }}/>
        <Stack.Screen name="Product Info" component={ProductInfo} options={{ title: "Product Info" }}/>
        <Stack.Screen name="Add Product" component={AddProduct} options={{ title: "Add Product" }}/>
        <Stack.Screen name="Edit Product" component={EditProduct} options={{ title: "Edit Product" }}/>
      </Stack.Navigator>
    </>
    )
  }
  

return (
  <Tab.Navigator 
    initialRouteName="Home" 
    backBehavior="none"
    inactiveColor="#BCBCBC"
    activeColor="#fff"
    shifting
    barStyle={{backgroundColor: '#434343'}}
  >
    <Tab.Screen 
      name="Manage" 
      children={ManageComponents} 
      options={{
        tabBarLabel: 'Manage',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="treasure-chest" color={color} size={26} />
          ),
        }}
    />
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
        tabBarLabel: 'Change',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)}

export default MainMenu