import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, Avatar  } from 'react-native-paper';

const Login = props => {
  const [username, setUsername] = useState('')
  const [passwod, setPassword] = useState('')
  const [userError, setUserError] = useState(false)
  const [passError, setPassError] = useState(false)

  const handleUsername = text => {
    setUsername(text)
    setUserError(false)
  }

  const handlePassword = text => {
    setPassword(text)
    setPassError(false)
  }
  const loginHandler = () => {
    if(username === '' || username === null){
      setUserError(true)
    }
    else if(passwod === '' || passwod === null){
      setPassError(true)
    }
    else{
    props.navigation.navigate('Main Menu')
    setUsername('')
    setPassword('')
    }
  }
  
  return(
    <View style={styles.container}>
        <Avatar.Icon size={24} icon="flower" />
      <TextInput
        style={styles.textInput}
        label="Username"
        value={username}
        error={userError}
        mode="outlined"
        selectionColor="#CFFCFF"
        onChangeText={text => handleUsername(text)}
      />
      <TextInput
        style={styles.textInput}
        label="Password"
        value={passwod}
        error={passError}
        mode="outlined"
        selectionColor="#CFFCFF"
        onChangeText={text => handlePassword(text)}
      />
      <Button 
        style={styles.btn}
        mode="contained" 
        onPress={loginHandler}>
        <Text>Login</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 50
  },
  btn: {
    marginTop: 20
  }
});


export default Login