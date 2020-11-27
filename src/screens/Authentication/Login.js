import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { TextInput, Button, Avatar, Title, Surface, Text  } from 'react-native-paper'

import BGPattern2 from '../../../assets/images/leaf2.png'

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
    <View style={styles.mainContainer}>
       <ImageBackground source={BGPattern2} style={styles.mainContainer} imageStyle={{resizeMode: 'repeat'}}>
      <Surface style={styles.loginContainer}>
        <View style={styles.header}>
          <Avatar.Icon size={40} icon="flower" />
          <Title style={styles.textTitle}>AgriQultura</Title>
        </View>
        <TextInput
          style={styles.textInput}
          label="Username"
          value={username}
          error={userError}
          selectionColor="#6200EE"
          mode="outlined"
          onChangeText={text => handleUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={passwod}
          error={passError}
          selectionColor="#6200EE"
          mode="outlined"
          onChangeText={text => handlePassword(text)}
        />
        <Button 
          style={styles.btn}
          mode="contained" 
          onPress={loginHandler}
          children="Login"
        />
      </Surface>
      </ImageBackground>
    </View>
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
    elevation: 40,
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
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 50
  },
  btn: {
    marginTop: 20,
    height: 50,
    justifyContent: 'center'
  }
});


export default Login