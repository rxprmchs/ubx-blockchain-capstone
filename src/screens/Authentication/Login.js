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
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={userError}
          onChangeText={text => handleUsername(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={passwod}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={passError}
          onChangeText={text => handlePassword(text)}
        />
        <Button 
          mode="contained" 
          style={styles.btn}
          onPress={loginHandler}
          uppercase
        >
          <Text style={styles.btnText}>Login</Text>
        </Button>
        <Text style={styles.textNoAccount}>Don't have an account?</Text>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button 
            mode="contained" 
            style={styles.createBtn}
            onPress={loginHandler}
            uppercase
            onPress={() => props.navigation.navigate('Farmer Signup')}
            >
            <Text style={styles.btnCreateText}>Create Farmer</Text>
          </Button>
            <Text style={{textAlign: 'center'}}>OR</Text>
            <Button 
              mode="contained" 
              style={styles.createBtn}
              onPress={loginHandler}
              uppercase
              onPress={() => props.navigation.navigate('Wholesaler Signup')}
            >
              <Text style={styles.btnCreateText}>Create Wholesaler</Text>
          </Button>
        </View>
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
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
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
    fontFamily: 'Lato-Bold',
    paddingLeft: 10,
  },
  textNoAccount:{
    textAlign: 'center',
    textDecorationColor: '#6200ee',
    fontFamily: 'Lato-Bold',
    marginBottom: 10
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    fontSize: 15, 
    fontFamily: 'Lato-Regular'
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    fontSize: 50, 
  },
  createBtn:{
   padding: 10,
    height: 50,
    width: 200,
    justifyContent: 'center',
    fontSize: 50, 
  },
  btnText: {
    fontFamily: 'Lato-Bold', 
    fontSize: 18, 
    color: '#FFF'
  },
  btnCreateText: {
    fontFamily: 'Lato-Bold', 
    fontSize: 10,
    color: '#FFF'
  }
});


export default Login