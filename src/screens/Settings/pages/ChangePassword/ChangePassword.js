import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import HeaderContianer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassowrd] = useState('')
  const [newPassword, setNewPassowrd] = useState('')
  const [confirmPassowrd, setConfirmPassword] = useState('')
  const [currentPassErr, setCurrentPassErr] = useState(false)
  const [newPassErr, setNewPassErr] = useState(false)
  const [confirmPassErr, setConfirmPassErr] = useState(false)

  return (
    <View>
      <HeaderContianer>
        <View style={styles.headerContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.incomeTitle}>Change Password</Text>
          </View>
          <View>
            <Text style={styles.incomeSubTitle}>Update your password</Text>
          </View>
        </View>
      </HeaderContianer>
      <TextInput
        label="Current Password"
        mode="flat"
        value={currentPassword}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={currentPassErr}
        // onChangeText={text => handleUsername(text)}
      />
      <TextInput
        label="New Password"
        mode="flat"
        value={newPassword}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={newPassErr}
        // onChangeText={text => handleUsername(text)}
      />
      <TextInput
        label="Confirm New Password"
        mode="flat"
        value={confirmPassowrd}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={confirmPassErr}
        // onChangeText={text => handleUsername(text)}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => console.log('Submit')}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button>
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
    color: '#FFF',
  }
});

export default ChangePassword