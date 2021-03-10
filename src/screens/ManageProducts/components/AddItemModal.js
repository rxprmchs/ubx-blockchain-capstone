import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, BackHandler, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Avatar, TextInput, Text } from 'react-native-paper';

const AddItemModal = props => {
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
      onRequestClose={()=>{props.cancel()}}
      visible={props.modalVisible}
      >
      <View style={styles.bgModalContainer}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={{flexDirection: 'column'}}>

              {/* header */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20}}>
                <View>
                  <Text style={styles.title}>Add a wine</Text>
                  <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459'}}/>
                </View>
                {/* //close button */}
                <TouchableOpacity onPress={()=> props.cancel()}>
                <Avatar.Icon size={30} style={{backgroundColor: '#fff', borderColor: '#000'}}  icon="close" color="#BCBCBC"/>
                </TouchableOpacity>
              </View>

              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex:1}}
                keyboardVerticalOffset={190}
              >

                <ScrollView>    
                  <Text style={styles.inputTitle}>Wine name</Text>
                  <TextInput
                    style={{height: 40, width: 380, backgroundColor: '#DEDEDE', marginBottom:20}}
                    placeholder="Set Temperature"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    onChangeText={text => setText(text)}
                  />

                  <Text style={styles.inputTitle}>Date it was stored</Text>
                  <TextInput
                    style={{height: 40, width: 380, backgroundColor: '#DEDEDE', marginBottom:20}}
                    placeholder="MM-DD-YYYY"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    onChangeText={text => setText(text)}
                  />
 
                  <Text style={styles.inputTitle}>Type of wine</Text>
                  <TextInput
                    style={{height: 40, width: 380, backgroundColor: '#DEDEDE', marginBottom:20}}
                    placeholder="Set Temperature"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    // onChangeText={text => setText(text)}
                  />

                  <Text style={styles.inputTitle}>Wine threshold</Text>
                  <TextInput
                    style={{height: 40, width: 380, backgroundColor: '#DEDEDE', marginBottom:10}}
                    placeholder="Lowest Temperature"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    // onChangeText={text => setText(text)}
                  />
                  <TextInput
                    style={{height: 40, width: 380, backgroundColor: '#DEDEDE', marginBottom:20}}
                    placeholder="Highest Temperature"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    // onChangeText={text => setText(text)}
                  />

                  <Text style={styles.inputTitle}>About the wine</Text>
                  <TextInput
                    style={{height: 100, width: 380, backgroundColor: '#DEDEDE', marginBottom:0}}
                    placeholder="About the wine"
                    placeholderTextColor="#BCBCBC"
                    // value={text}
                    multiline={true}
                    numberOfLines={5}
                    // onChangeText={text => setText(text)}
                  />
                  
                </ScrollView>
              </KeyboardAvoidingView>

              <View style={{justifyContent: 'center', alignSelf:'center'}}>
                <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=> props.proceed && props.proceed()}>
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
    borderTopRightRadius: 50,
    paddingBottom: 10,
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
    fontSize : 15,
    fontWeight : 'bold',
    color: '#C92459',
  },
  inputTitle:{
    fontSize : 15,
    fontWeight : 'bold',
    color: '#C92459',
    marginBottom: 10
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
    width: 150,
    height: 48,
    borderRadius: 25,
    marginTop: 10,
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

const styless = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});
export default AddItemModal