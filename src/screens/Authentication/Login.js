import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Login = props => {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Main Menu')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
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
});


export default Login