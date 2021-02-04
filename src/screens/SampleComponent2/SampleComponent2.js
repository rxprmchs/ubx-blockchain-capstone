import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

const SampleComponent2 = () =>{
  return(
    <View style={styles.container}>
      <Text>Blank Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default SampleComponent2