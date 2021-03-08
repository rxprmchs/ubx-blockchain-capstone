import React, {useEffect, useState} from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default function Sample() {
  const [mainMarker, setMainMarker] = useState()
  const [mainMap, setMainMap] = useState()

  const findCoordinates =()=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        const longitude = JSON.stringify(position.coords.longitude);
        const latitude = JSON.stringify(position.coords.latitude);

        const marker = (
          <MapView               
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}>

          <Marker coordinate = {{latitude: parseFloat(latitude),longitude: parseFloat(longitude)}}
          pinColor = {"orange"} // any color
          title={"title"}
          description={"description"}/>
          </MapView>
        )

        setMainMarker(marker)
  
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );
  };  

  useEffect(()=>{
    findCoordinates()
  },[])
  
    return (
      <>
        {mainMarker}
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