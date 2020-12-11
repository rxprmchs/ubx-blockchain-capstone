import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const FarmerSignup = (props) => {
  return (
    <ScrollView>
      <TextInput
        label="First Name"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Last Name"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Address line"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="City"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Province"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Zip Code"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Farmer Type"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Main goods"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Mobile"
        mode="flat"
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
      />
      <TextInput
        label="Description"
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

export default FarmerSignup