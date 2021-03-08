import React, {useEffect, useState} from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



export default function Sample2() {
    return ( 
      <>
      <MapView
      
               style={{ flex: 1 }}
               provider={PROVIDER_GOOGLE}
               showsUserLocation
               initialRegion={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421}}
      
            >
        <Marker coordinate = {{latitude: 37.78825,longitude: -122.4324}}
         pinColor = {"orange"} // any color
         title={"title"}
         description={"description"}/>

            </MapView>

</>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})