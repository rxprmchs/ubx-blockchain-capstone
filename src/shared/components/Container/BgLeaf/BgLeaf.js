import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import Leaf from '../../../../../assets/images/leaf2.png'

const BgLeaf = props => {
  return(
    <ImageBackground source={Leaf} style={styles.mainContainer} imageStyle={{resizeMode: 'repeat', width: '100%'}}>
      {props.children}
    </ImageBackground>
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
})

export default BgLeaf

