import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, BackHandler, TouchableOpacity } from 'react-native'
import { Text} from 'react-native-paper';

import HighFive from '../../../../../../assets/images/Group1861.svg'

const VerifySuccessModal = props => {
  const [text, setText] = useState('');
  const [checked, setChecked] = React.useState('fourth');
  const [secondChecked, setSecondChecked] = React.useState('first');

  useEffect(() => {
      const backAction = () => {
         console.log('back')
      };
      const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
      );
      
      return () => backHandler.remove();
  }, [])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      >
      <View style={styles.bgModalContainer}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={{flexDirection: 'column', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
              <HighFive/>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>Qork Verified</Text>
                <Text style={{fontSize: 18}}>Qork has been registered to the device </Text>
              </View>
              <View style={{justifyContent: 'center', padding: 10,  alignItems: 'center'}}>
                <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={props.onPress}>
                  <Text style={styles.btnTxt}>PROCEED</Text>
                </TouchableOpacity> 
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
  bgModalContainer: {
    flex: 1,
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
  },
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    position : 'absolute',
    bottom : 0
  },
  modal:{
    backgroundColor: "white",
    borderTopRightRadius: 50,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
  shadowOffset: {
    width:0 ,
    height: 2
    },
    width : '100%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
  title:{
    fontSize : 18,
    fontWeight : 'bold',
    color: '#C92459',
    padding: 10
  },
  passedData:{
    fontSize : 17,
    fontWeight : 'bold',
    color: "#005bde"
  },
  highFive:{
    height : 100,
    width: 100,
  },
  txtDesc:{
    textAlign: 'center',
    fontSize:16,
    paddingLeft: 40, 
    paddingRight: 40
  },
  btnContainer:{
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: '100%',
    marginBottom: 40
  },
  btnPrimary: {
    flexDirection: 'row',
    backgroundColor: "#C92459",
    justifyContent: "center",
    alignItems: 'center',
    width: 295,
    height: 48,
    borderRadius: 25,
    marginTop: 20,
    elevation: 2,
  },
  btnTxt : {
    color: '#FFF',
    letterSpacing: 3.15,
    textAlign: 'center',
    fontWeight : "bold",
    fontFamily: 'Roboto',
    fontSize: 16,
  },
})

export default VerifySuccessModal