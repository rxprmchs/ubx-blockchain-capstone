import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import VerifySuccessModal from './components/VerifySuccessModal'

const CameraQR = (props)=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalVisible, setModalVisible] = useState(false)

  const openModalHandler = () => {
    setModalVisible(true)
  }
  
  const closeModalHandler = () => {
    setModalVisible(false)
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex:1}}>
      <Camera style={{flex:1, justifyContent:'space-between', marginVertical: 'auto',}} type={type}>
        <View style={{height:'32%', backgroundColor: '#00000080', }}/>

        <View style={{flex:1, justifyContent:'space-between', flexDirection:'row'}}>
          <View style={{height:'auto', width: '20%', backgroundColor: '#00000080', }}/>
          <View style={{height:'auto', width: '20%', backgroundColor: '#00000080', }}/>
        </View>

        <View style={{height:'32%', backgroundColor: '#00000080', alignItems:'center', }}>

          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => {
              // props.navigation.navigate('Wine Summary')
              setModalVisible(true)
              // setType(
              //   type === Camera.Constants.Type.back
              //     ? Camera.Constants.Type.front
              //     : Camera.Constants.Type.back
              // );
            }}>
            <Text style={{textAlign:'center', fontSize:18, color: 'white'}}>SCAN THE QUORK'S QR CODE</Text>
          </TouchableOpacity>

        </View>

      </Camera>
      <VerifySuccessModal
        onPress={()=>{
          closeModalHandler()
          props.navigation.navigate('Wine Summary')
        }}
        modalVisible={modalVisible} 
        cancel={closeModalHandler} 
      />  
    </View>
  );
}

const styles = StyleSheet.create({ 
	btnPrimary: {
		flexDirection: 'row',
		backgroundColor: "#DE933D",
		justifyContent: "center",
		alignItems: 'center',
    // width: 295,
    paddingHorizontal: 10,
    paddingVertical: 5,
		// height: 30,
		borderRadius: 25,
		marginTop: 'auto',
		marginBottom: 45,
    elevation: 2,
    
	  },
 }); 

 export default CameraQR;