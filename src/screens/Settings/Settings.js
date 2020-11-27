import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Home = () => {
  return(
    <View style={styles.container}>
      <Text>but I'm barely breathin..</Text>
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


export default Home