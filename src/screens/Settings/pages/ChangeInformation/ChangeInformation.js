import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import HeaderContianer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer';

const ChangeInformation = () => {
  const [username, setUsername] = useState('')
  const [usernameErr, setUsernameErr] = useState(false)

  return (
    <View>
      <HeaderContianer>
        <View style={styles.headerContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.incomeTitle}>Change Information</Text>
          </View>
          <View>
            <Text style={styles.incomeSubTitle}>Update your information</Text>
          </View>
        </View>
      </HeaderContianer>
      {/* <TextInput
        label="Change Username"
        mode="flat"
        value={username}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={usernameErr}
        // onChangeText={text => handleUsername(text)}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => console.log('Submit')}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    alignItems: 'center',
    height: '100%', 
    justifyContent: 'center'
  },
  incomeTitle:{
    fontSize: 30,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  incomeSubTitle:{
    color: '#fff',
    fontFamily: 'Lato-Regular',
    letterSpacing: 3
  },
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
    color: '#FFF'
  }
});

export default ChangeInformation