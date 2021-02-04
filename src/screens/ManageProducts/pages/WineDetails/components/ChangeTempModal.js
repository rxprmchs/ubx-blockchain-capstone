import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, BackHandler, TouchableOpacity } from 'react-native'
import { Avatar, TextInput, Text } from 'react-native-paper';

const ChangeTempModal = props => {
  const [text, setText] = useState('');

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
            {props.tempChanged ? 
              <View style = {{flexDirection: "column", marginTop: 2.5, alignItems: 'center'}}>
                <Text style={styles.title}>{props.successText}</Text>
                <Text style={{fontSize: 18, paddingLeft: 10, paddingRight: 10, paddingTop: 20, textAlign: 'center'}}>Will now notify the wine owner and the courier with the update</Text>
            </View>
            :
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20}}>
                <View>
                  <Text style={styles.title}>Change Temperature</Text>
                  <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 192, marginBottom: 10}}></View>
                </View>
                <TouchableOpacity onPress={()=> props.cancel()}>
                  <Avatar.Icon size={30} style={{backgroundColor: '#fff', borderColor: '#000'}} icon="close" color="#BCBCBC"/>
                </TouchableOpacity>
              </View>
              <TextInput
                style={{width: 380}}
                label="Set Temperature"
                value={text}
                theme={{ colors: { primary: '#C92459',underlineColor:'transparent',}}}
                onChangeText={text => setText(text)}
              />
            </View>
            }
            {props.tempChanged ?
              <View style={{justifyContent: 'center', padding: 10}}>
                <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=> props.proceed()}>
                  <Text style={styles.btnTxt}>BACK TO WINE INFO</Text>
                </TouchableOpacity> 
              </View> 
              :  
              <View style={{justifyContent: 'center', padding: 10}}>
                <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=> props.save()}>
                  <Text style={styles.btnTxt}>CONFIRM</Text>
                </TouchableOpacity> 
              </View>
              }
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
    fontSize : 20,
    fontWeight : 'bold',
    color: '#C92459'
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

export default ChangeTempModal