import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button, Avatar, Title, Surface, Text  } from 'react-native-paper'

import BgLeaf from '../../shared/components/Container/BgLeaf/BgLeaf'

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
    <BgLeaf>
      <Surface style={styles.loginContainer}>
        <View style={styles.header}>
          <Avatar.Icon size={40} icon="flower" />
          <Title style={styles.textTitle}>AgriQultura</Title>
        </View>
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}}}
          error={userError}
          onChangeText={text => handleUsername(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={passwod}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}}}
          error={passError}
          onChangeText={text => handlePassword(text)}
        />
        <Button 
          children="Login"
          mode="contained" 
          style={styles.btn}
          onPress={loginHandler}
        />
        <Text style={styles.textNoAccount}>Don't have an account?</Text>
      </Surface>
    </BgLeaf>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  loginContainer: {
    padding: 30,
    marginLeft: 10,
    marginRight: 10,
    elevation: 30,
    backgroundColor: '#FFF'
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    paddingLeft: 10,
  },
  textNoAccount:{
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationColor: '#6200ee',
    
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 50
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    justifyContent: 'center'
  }
});


export default Login