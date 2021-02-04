import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import QorkPattern from '../../../../../assets/images/pattern.svg'

const QorkPatternContainer = props => {
  return(
    <ImageBackground source={QorkPattern} style={styles.mainContainer} imageStyle={{resizeMode: 'stretch', width: '100%'}}>
      {props.children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DE933D',
    justifyContent: 'center',
    height: 250,
    width: '100%',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25
  },
})

export default QorkPatternContainer