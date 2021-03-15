import React, { useState } from 'react'
import { 
  StyleSheet, 
  ScrollView, 
  View, 
  Platform, 
  TouchableOpacity,
  Modal } from 'react-native'
import { Appbar, Surface, Text } from 'react-native-paper';

import CardItem from './components/CardItem'
import ModalUpdate from './components/ChangeTempModal'

const AdjustTemp = props => {
  const [modalVisible, setModalVisible] = useState(false)
  const [tempChanged, setTempChanged] = useState(false)

  const changeTempHandler = () => {
    setModalVisible(true)
    setTempChanged(false)
  }
  
  const saveTempHandler = () => {
    setTempChanged(true)
  }

  const closeModalHandler = () => {
    setModalVisible(false)
  }

  const successModalHanlder = () => {
    setModalVisible(false)
    setTempChanged(false)
    props.navigation.navigate('Item Details')
  }

  return(
    <ScrollView>
      <Appbar.Header style={{backgroundColor: '#FFF'}} backgroundColor="white">
        <Appbar.Action icon="arrow-left" size={20} onPress={() => props.navigation.navigate('Item Details')} />
        <Appbar.Content color="#C92459" title="Adjust Temperature" />
      </Appbar.Header>
      <View style={{height: 300, width: '100%', backgroundColor: '#FBFBFB', flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{color: '#C92459', fontSize: 18, paddingTop: 20, fontWeight: 'bold',}}>Current Temperature</Text>
        <Text style={{color: '#DE933D', fontSize: 100, fontWeight: 'bold',  padding: 10}}>12°c</Text>
        <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={changeTempHandler}>
          <Text style={styles.btnTxt}>CHANGE TEMPERATURE</Text>
        </TouchableOpacity> 
      </View>
      <Surface style={{minHeight: 380, flex: 1}}>
        <Text style={{color: '#C92459', fontWeight: 'bold', fontSize: 18, paddingLeft: 20, paddingTop: 10}}>Logs</Text>
        <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 40,  marginLeft: 20, marginBottom: 10}}></View>
        <CardItem 
          title="Temperature was changed" 
          date="3 day(s) ago"
          changes="From: 16c → To: 11c"
          onPress={() => console.log('Clicked!')}
        />
       <CardItem 
          title="Threshhold exceeded" 
          date="3 day(s) ago"
          changes="From: 12c → To: 16c"
          onPress={() => console.log('Clicked!')}
        />
      </Surface>
      <ModalUpdate
        modalVisible={modalVisible} 
        cancel={closeModalHandler} 
        save={saveTempHandler}
        tempChanged={tempChanged} 
        proceed={successModalHanlder}
        successText='Temperature Changed'
        backText='BACK TO ITEM INFO'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});


export default AdjustTemp