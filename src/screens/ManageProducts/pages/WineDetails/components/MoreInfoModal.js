import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, BackHandler, TouchableOpacity } from 'react-native'
import { Avatar, TextInput, Text, RadioButton, Button  } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MoreInfoModal = props => {
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
            <View style={{flexDirection: 'column', width: '100%', padding: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.title}>Current Location</Text>
                  <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 138, marginBottom: 10}}></View>
                </View>
                <TouchableOpacity onPress={()=> props.cancel()} >
                  <Avatar.Icon size={30} style={{backgroundColor: '#fff', borderColor: '#000'}} icon="close" color="#BCBCBC"/>
                </TouchableOpacity>
              </View>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                    disabled
                  />
                  <Text style={{fontSize: 15, color: '#BCBCBC'}}>Netherlands</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                    disabled
                  />
                  <Text style={{fontSize: 15, color: '#BCBCBC'}}>California</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('third')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                    disabled
                  />
                  <Text style={{fontSize: 15, color: '#BCBCBC'}}>Canada</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="fourth"
                    status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('fourth')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                  />
                  <Text style={{fontSize: 15}}>Thailand</Text>
                </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="fifth"
                    status={ checked === 'fifth' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('fifth')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                    disabled
                  />
                  <Text style={{fontSize: 15, color: '#BCBCBC'}}>Saitama, Japan</Text>
                </View>
                <View>
                  <Text style={styles.title}>Destination</Text>
                  <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 95, marginBottom: 10}}></View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="first"
                    status={ secondChecked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setSecondChecked('first')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                  />
                  <Text style={{fontSize: 15}}>Canada</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <RadioButton
                    value="second"
                    status={ secondChecked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setSecondChecked('second')}
                    uncheckedColor="#BCBCBC"
                    color="#DE933D"
                  />
                  <Text style={{fontSize: 15}}>Japan, Saitama</Text>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#BCBCBC', width: '100%', padding: 10, marginBottom: 10}}></View>
                <View>
                  <Text style={styles.title}>Departed Since</Text>
                  <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#000" name='calendar' size={20}/>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>January 1, 2021</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.title}>Expected Arrival Time</Text>
                  <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#000" name='calendar' size={20}/>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>January 28, 2021</Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center', padding: 10,  alignItems: 'center'}}>
                  <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=> props.cancel()}>
                    <Text style={styles.btnTxt}>CALL COURIER</Text>
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
    paddingTop: 10
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

export default MoreInfoModal