import React from 'react'
import { View, StyleSheet } from 'react-native'

const BgLeaf = props => {
  return(
    <View style={styles.mainContainer}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
})

export default BgLeaf

