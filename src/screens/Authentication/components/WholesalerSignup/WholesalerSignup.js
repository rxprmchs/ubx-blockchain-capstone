import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import axios from 'axios'

const WholeSalerSignup = (props) => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ city, setCity ] = useState('')
  const [ province, setProvince ] = useState('')
  const [ zipCode, setZipCode ] = useState('')
  const [ farmerType, setStoreName ] = useState('')
  const [ mainGoods, setMainGoods ] = useState('')
  const [ mobile, setMobile ] = useState('')
  const [ desc, setDesc ] = useState('')

  const firstNameHandler = (e) => {
    setFirstName(e)
  }
  const lastNameHandler = (e) => {
    setLastName(e)
  }
  const addressHandler = (e) => {
    setAddress(e)
  }
  const cityHandler = (e) => {
    setCity(e)
  }
  const provinceHandler = (e) => {
    setProvince(e)
  }
  const zipCodeHandler = (e) => {
    setZipCode(e)
  }
  const storeNameHandler = (e) => {
    setStoreName(e)
  }
  const mainGoodsHandler = (e) => {
    setMainGoods(e)
  }
  const mobileHandler = (e) => {
    setMobile(e)
  }
  const descHandler = (e) => {
    setDesc(e)
  }



  return (
    <ScrollView>
      <TextInput
        label="First Name"
        onChangeText={e => firstNameHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Last Name"
        onChangeText={e => lastNameHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Store Name"
        onChangeText={e => farmerTypeHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Address line"
        onChangeText={e => addressHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="City"
        onChangeText={e => cityHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Province"
        onChangeText={e => provinceHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Zip Code"
        onChangeText={e => zipCodeHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Mobile"
        onChangeText={e => mobileHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Description"
        onChangeText={e => descHandler(e)}
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => props.navigation.navigate('Login')}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    fontSize: 15, 
    fontFamily: 'Lato-Regular'
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    justifyContent: 'center',
    fontSize: 50, 
  },
  btnText: {
    fontFamily: 'Lato-Bold', 
    fontSize: 18, 
    color: '#FFF',
  }
});

export default WholeSalerSignup